import Razorpay from "razorpay";
import crypto from "crypto";
import { Course } from "../models/course.model.js";
import {CoursePurchase } from "../models/coursePurchase.model.js"
import { Lecture } from "../models/lecture.model.js";
import { User } from "../models/user.model.js";


const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// ✅ Create Razorpay Order
export const createRazorpayOrder = async (req, res) => {
  try {
    const userId = req.id;
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found!" });

    const amountInPaise = course.coursePrice * 100;

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    const newPurchase = new CoursePurchase({
      courseId,
      userId,
      amount: course.coursePrice,
      status: "pending",
      paymentId: order.id,
    });

    await newPurchase.save();

    return res.status(200).json({
      success: true,
      order,
      courseTitle: course.courseTitle,
      courseThumbnail: course.courseThumbnail,
      razorpayKey: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Verify Razorpay Payment
export const verifyRazorpayPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = req.body;
    const userId = req.id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }

    const purchase = await CoursePurchase.findOne({ paymentId: razorpay_order_id }).populate("courseId");

    if (!purchase) return res.status(404).json({ message: "Purchase not found" });

    purchase.status = "completed";
    await purchase.save();

    await Lecture.updateMany(
      { _id: { $in: purchase.courseId.lectures } },
      { $set: { isPreviewFree: true } }
    );

    await User.findByIdAndUpdate(userId, {
      $addToSet: { enrolledCourses: purchase.courseId._id },
    });

    await Course.findByIdAndUpdate(purchase.courseId._id, {
      $addToSet: { enrolledStudents: userId },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get Course Detail With Purchase Status
export const getCourseDetailWithPurchaseStatus = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.id;

    const course = await Course.findById(courseId)
      .populate("creator")
      .populate("lectures");

    const purchased = await CoursePurchase.findOne({ userId, courseId, status: "completed" });

    if (!course) return res.status(404).json({ message: "Course not found!" });

    return res.status(200).json({
      course,
      purchased: !!purchased, // true if purchesed or false otherwise
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching course" });
  }
};

// ✅ Get All Purchased Courses
export const getAllPurchasedCourse = async (_, res) => {
  try {
    const purchasedCourse = await CoursePurchase.find({ status: "completed" }).populate("courseId");

    return res.status(200).json({
      purchasedCourse: purchasedCourse || [],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching purchases" });
  }
};

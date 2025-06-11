import express from "express";

import {
  createRazorpayOrder,
  verifyRazorpayPayment,
  getAllPurchasedCourse,
  getCourseDetailWithPurchaseStatus,
} from "../controllers/coursePurchase.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/checkout/create-order").post(isAuthenticated, createRazorpayOrder);
router.route("/payment/verify").post(isAuthenticated, verifyRazorpayPayment);
router.route("/course/:courseId/detail-with-status").get(isAuthenticated, getCourseDetailWithPurchaseStatus);
router.route("/").get(isAuthenticated, getAllPurchasedCourse);



export default router;

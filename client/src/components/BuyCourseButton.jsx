import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  useCreateRazorpayOrderMutation,
  useVerifyRazorpayPaymentMutation,
} from "@/features/api/purchaseApi";
import { loadRazorpayScript } from "@/utils/loadRazorpayScript";

const BuyCourseButton = ({ courseId }) => {
  const [createRazorpayOrder, { isLoading: isCreatingOrder }] =
    useCreateRazorpayOrderMutation();
  const [verifyRazorpayPayment] = useVerifyRazorpayPaymentMutation();

  const purchaseCourseHandler = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      toast.error("Razorpay SDK failed to load.");
      return;
    }

    const { data, error } = await createRazorpayOrder(courseId);
    if (error || !data?.order?.id) {
      toast.error("Could not create Razorpay order.");
      return;
    }

    const options = {
      key: data.razorpayKey,
      amount: data.order.amount, // amount in paise
      currency: "INR",
      name: "LMS Platform",
      description: data.courseTitle,
      image: data.courseThumbnail,
      order_id: data.order.id,
      handler: async (response) => {
        const verifyRes = await verifyRazorpayPayment({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          courseId,
        });

        if (verifyRes?.data?.success) {
          toast.success("Payment successful! 🎉");
          window.location.reload(); // refresh course status
        } else {
          toast.error("Payment verification failed.");
        }
      },
      prefill: {
        name: "Your Name", // you can replace this with user.name from state
        email: "youremail@example.com", // and this with user.email
      },
      theme: {
        color: "#6366f1",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Button
      onClick={purchaseCourseHandler}
      disabled={isCreatingOrder}
      className="w-full"
    >
      {isCreatingOrder ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        "Purchase Course"
      )}
    </Button>
  );
};

export default BuyCourseButton;

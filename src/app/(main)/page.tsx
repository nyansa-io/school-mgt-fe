"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import {
  OTPFormField,
  PhoneNumberFormField,
} from "@/customComponents/FormFields";
import ButtonLoading from "@/customComponents/Button";
import Link from "next/link";
import { OtpResendTimer } from "@/customComponents/OTPResetTimer";
import ProgressBarComponent from "@/customComponents/ProgressBarComponent";
import { useRouter } from "next/navigation";

const phoneNumberSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
});

const otpSchema = z.object({
  otp: z.string().min(1, "OTP is required").min(4, "OTP must be 4 digits"),
});

const ClientLoginPage = () => {
  const router = useRouter();

  const [currentView, setCurrentView] = useState<"Phone" | "Otp">("Phone");
  const progressBarRef = useRef<any>(null);

  const phoneNumberForm = useForm<z.infer<typeof phoneNumberSchema>>({
    resolver: zodResolver(phoneNumberSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleResendOTP = () => {
    console.log("resend OTP");
  };

  const handleSubmit = (data: any) => {
    setCurrentView("Otp");
    progressBarRef?.current?.next?.();
  };

  const goToDashboard = (data:any) => {
    router.push("/private/dashboard");
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto h-full p-2">
      {/* Header */}
      <div className="headerSection w-full mt-6 text-center">
        <p className="header">Welcome Back</p>
        <p className="description mt-1 text-gray-500">
          Enter your Phone Number to login
        </p>
      </div>

      {/* Stepper */}
      <div className="stepperProgress w-full mt-10">
        <ProgressBarComponent
          steps={[1, 2]}
          progressBarClass="w-full"
          ref={progressBarRef}
        />
      </div>

      {/* Animated Views */}
      <div className="relative w-full h-[250px] overflow-hidden mt-6">
        {/* Phone View */}
        <div
          className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out
          ${currentView === "Phone" ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Form {...phoneNumberForm}>
            <form
              className="w-full flex flex-col gap-3"
              onSubmit={phoneNumberForm.handleSubmit(handleSubmit)}
            >
              <PhoneNumberFormField
                form={phoneNumberForm}
                name="phoneNumber"
                label="Phone Number"
              />
              <ButtonLoading title="Submit" />
            </form>
            <div className="login text-sm text-right mt-4 w-full">
              <span className="text-gray-400">
                Don't have an account? Click here to{" "}
              </span>
              <Link className="text-primary" href="/register">
                Register
              </Link>
            </div>
          </Form>
        </div>

        {/* OTP View */}
        <div
          className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out
          ${currentView === "Otp" ? "translate-x-0" : "translate-x-full"}`}
        >
          <Form {...otpForm}>
            <form
              className="w-full flex flex-col gap-3"
              onSubmit={otpForm.handleSubmit(goToDashboard)}
            >
              <OTPFormField
                form={otpForm}
                name="otp"
                maxLength={4}
                label="OTP"
              />
              <ButtonLoading title="Submit OTP" />
            </form>
            <div className="login text-sm text-right mt-4 w-full flex justify-end items-center h-[35px]">
              <OtpResendTimer duration={2} onResend={handleResendOTP} />
            </div>
          </Form>
        </div>
      </div>

      {/* Footer */}
      <div className="footer mt-4">
        <p className="text-sm text-gray-500">
          By signing in or creating an account, you agree to our{" "}
          <a href="/terms" className="text-primary underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-primary underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ClientLoginPage;

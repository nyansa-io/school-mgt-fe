"use client";

import { ImageViewer } from "@/customComponents/ImageViewer";
import { cn } from "@/lib/utils";
import { BanknoteIcon } from "lucide-react";
import React, { useState } from "react";

const PaymentInformation = () => {
  const [paymentType] = useState<"ONLINE" | "OFFLINE">("OFFLINE");

  return (
    <div className="bg-white rounded-lg p-4 shadow w-full">
      {/* header */}
      <div className="headerText flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <BanknoteIcon className="w-" />
          <p className="font-semibold ">Payment Information</p>
        </div>

        {/* payment type */}
        <div
          className={cn(
            "paymentType ml-auto px-3 py-1 rounded-full text-sm",
            paymentType === "ONLINE"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          )}
        >
          {paymentType === "ONLINE" ? "Online Payment" : "Offline Payment"}
        </div>
      </div>

      {/* -----------------------------------------PAYMENT DETAILS---------------------------------------------------------------------- */}
      {/* Online Payment */}
      {paymentType == "ONLINE" && (
        <div className="paymentDetails mt-8 border rounded-lg p-4 grid grid-cols-2 gap-8">
          {/* Relationship to Student */}
          <div className="fullName">
            <p className="label text-sm text-gray-500">Payment Type</p>
            <p className="value font-semibold text-gray-600">Mobile Money</p>
          </div>
          {/* Relationship to Student */}
          <div className="fullName">
            <p className="label text-sm text-gray-500">Amount</p>
            <p className="value font-semibold text-gray-600">
              <span>&#x20B5;</span> 200
            </p>
          </div>
          {/* full name  */}
          <div className="fullName">
            <p className="label text-sm text-gray-500">Reference Number</p>
            <p className="value font-semibold text-gray-600">AT30AT473439</p>
          </div>
          {/* Address */}
          <div className="fullName">
            <p className="label text-sm text-gray-500">Transaction Date</p>
            <p className="value font-semibold text-gray-600">
              Monday, 5th January 2025
            </p>
          </div>
          {/* Place of Residence */}
          <div className="fullName">
            <p className="label text-sm text-gray-500">Sender Name</p>
            <p className="value font-semibold text-gray-600">Maxwell Konadu</p>
          </div>
          {/* Email */}
          <div className="fullName">
            <p className="label text-sm text-gray-500">Beneficiary Account</p>
            <p className="value font-semibold text-gray-600">00543043834834</p>
          </div>
        </div>
      )}

      {/* Offline payment */}
      {paymentType == "OFFLINE" && (
        <div className="offlinePayment mt-8 border rounded-lg p-4 grid grid-cols-7 gap-6">
          {/* image */}
          <div className="image col-span-5 overflow-hidden">
            {/* <Avatar className="w-full rounded-md h-50">
              <AvatarImage
                src="/images/ReceiptBankDetails.png"
                className="max-h-full object-cover aspect-auto"
              />
              <AvatarFallback className="rounded-md">
                {"Maxwell".at?.(0)}
                {"Konadu".at?.(0)}
              </AvatarFallback>
            </Avatar> */}
            <ImageViewer src="/images/ReceiptBankDetails.png" alt="" className="border border-gray-100"/>
          </div>
          {/* information */}
          <div className="info col-span-2 flex flex-col gap-2">
            <div className="referenceNumber">
              <p className="label text-sm text-gray-500">Reference Number</p>
              <p className="value font-semibold text-gray-600">AT30AT473439</p>
            </div>
            <div className="fullName">
              <p className="label text-sm text-gray-500">Amount</p>
              <p className="value font-semibold text-gray-600">
                <span>&#x20B5;</span> 200
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentInformation;

"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { InputFormField, SwitchFormField } from "@/customComponents/FormFields";
// import AppDivider from "@/customComponents/AppDivider";
import InformationCard from "@/customComponents/InformationCard";
import { ImageViewer } from "@/customComponents/ImageViewer";

const paymentSchema = z.object({
  // if payment was made offline
  paidOffline: z.boolean(),
  receiptNumber: z.string(),
  receiptImage: z.any(),

  // if payment was made online
  paymentType: z.enum(["MOBILE_MONEY", "VISA_CARD"]),
  email: z.string().email(),
});

const FormPaymentForm = () => {
  const paymentForm = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      paidOffline: false,
      receiptNumber: "",
      receiptImage: "",
      paymentType: "MOBILE_MONEY",
      email: "",
    },
  });

  useEffect(() => {
    console.log("first", paymentForm.watch("paidOffline"));
    console.log("first", paymentForm.watch("receiptImage"));
    return () => {};
  }, [paymentForm.watch("paidOffline")]);

  return (
    <div className="h-full flex flex-col">
      <div className="pageHeader text-center shrink-0">
        <p className="title text-xl font-semibold">Payment Form</p>

        <p className="subHeaderText text-gray-400 text-sm">
          Continue the process by making payment
        </p>
      </div>

      <div className="pageContent mt-8 flex-1 grid grid-cols-2 gap-8 py-1">
        {/* form section */}
        <section className="Form hover:shadow rounded-lg bg-white border">
          <Form {...paymentForm}>
            <form action="" className="p-4 px-6 space-y-4">
              <div className="mt-2">
                <InformationCard
                  title="Description"
                  description={
                    <div>
                      Choose switch the toggle if you paid offline: That means
                      you have already made an in-person payment either at the
                      bank or at the school premises for the form.
                    </div>
                  }
                  styling={{ mainContainer: "bg-blue-50" }}
                />
              </div>

              {/* switch */}
              <SwitchFormField
                form={paymentForm}
                name="paidOffline"
                label="Paid Offline"
              />

              {/* payment inputs */}
              <div className="mt-4 paymentInputs">
                {/* if onLine */}
                {!paymentForm.getValues("paidOffline") && (
                  <div className="onlinePayment space-y-4">
                    <InputFormField
                      form={paymentForm}
                      name="email"
                      label="Email Address"
                      placeholder=" "
                      type="email"
                    />
                  </div>
                )}

                {/* if offline */}
                {paymentForm.getValues("paidOffline") && (
                  <div className="offlinePayment space-y-4">
                    <InputFormField
                      form={paymentForm}
                      name="receiptNumber"
                      label="Receipt Number"
                      placeholder=" "
                      type="text"
                    />

                    <InputFormField
                      form={paymentForm}
                      name="receiptImage"
                      label="Upload Receipt Image"
                      placeholder=" "
                      type="file"
                    />

                 { false &&  <div className="imageViewer isolate overflow-hidden h-50 testr">
                      <ImageViewer
                        src={(paymentForm.watch("receiptImage"))}
                        alt=""
                        className="border border-gray-100"
                      />
                    </div>}
                  </div>
                )}
              </div>
            </form>
          </Form>
        </section>

        {/* Hero section */}
        <section className="hero rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5242829/pexels-photo-5242829.jpeg"
            className="size-full"
          />
        </section>
      </div>
    </div>
  );
};

export default FormPaymentForm;

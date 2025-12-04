"use client";

import StepperCard, {
  IStep,
  StepperCardRef,
} from "@/customComponents/StepperCard";
import React, { useRef, useState } from "react";
import GuardianForm from "./partials/GuardianForm";
import ChildForm from "./partials/ChildForm";
import FormPaymentForm from "./partials/FormPaymentForm";
import ApplicationSelectionStep from "./partials/ApplicationSelectionStep";

const ApplicationFormPage = () => {
  const stepperRef = useRef<StepperCardRef>(null);

  const [currentStep, setcurrentStep] = useState<number>(1);

  const handleRightButtonClick = (val: () => void) => {
    val?.();
  };

  const handleLeftButtonClick = (val: () => void) => {
    val?.();
  };

  const tempNext = () => {
    stepperRef.current?.next();
  }

  const FormSteps: IStep[] = [
    {
      title: "Parent/Guardian Form",
      id: 1,
      content: (
        <ApplicationSelectionStep goToNextStep={tempNext} />
      ),
      // description: 'Some descriptions',
      leftControlBtnLabel: "Cancel",
      rightControlBtnLabel: "Submit",
    },
    {
      title: "Parent/Guardian Form",
      id: 2,
      content: <GuardianForm />,
      // description: 'Some descriptions',
      leftControlBtnLabel: "Previous",
      rightControlBtnLabel: "Submit",
    },
    {
      title: "Ward Form",
      id: 3,
      content: <ChildForm />,
      // description: 'Some descriptions',
      leftControlBtnLabel: "Previous",
      rightControlBtnLabel: "Submit",
    },
    {
      title: "Payment Form",
      id: 4,
      content: <FormPaymentForm />,
      // description: 'Some descriptions',
      leftControlBtnLabel: "Cancel",
      rightControlBtnLabel: "Submit",
    },
  ];

  return (
    <div className="h-full py-6 px-4">
      <StepperCard
        ref={stepperRef}
        steps={FormSteps}
        leftBtnClicked={handleLeftButtonClick}
        rightBtnClicked={handleRightButtonClick}
        classNames={{ cardClass: "bg-white/40 backdrop-blur-sm" }}
        getCurrentStep={setcurrentStep}
        hideActionBtns={currentStep === 1}
      />
    </div>
  );
};

export default ApplicationFormPage;

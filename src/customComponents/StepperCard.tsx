"use client";

import type React from "react";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Interface for Step
export interface IStep {
  id: number;
  title?: string;
  description?: string;
  rightControlBtnLabel?: string;
  leftControlBtnLabel?: string;
  content: React.ReactNode;
}

// Interface for ClassNames
export interface IStepperClassNames {
  mainContainerClass?: string;
  cardClass?: string;
  contentContainerClass?: string;
  contentClass?: string;
}

// Interface for StepperCard Props
export interface IStepperCardProps {
  steps: IStep[];
  defaultStep?: number;
  getCurrentStep?: (val: number) => void;
  title?: string;
  classNames?: IStepperClassNames;
  description?: string | React.ReactNode;
  rightBtnClicked: (callback: () => void) => void;
  leftBtnClicked: (callback: () => void) => void;
  hideActionBtns?: boolean;
}

// Interface for exposed methods
export interface StepperCardRef {
  next: () => void;
  previous: () => void;
  goToStep: (stepNumber: number) => void;
  getCurrentStep: () => number;
  getCompletedSteps: () => number[];
}

const StepperCard = forwardRef<StepperCardRef, IStepperCardProps>(
  (
    {
      title,
      classNames,
      description,
      steps,
      getCurrentStep,
      defaultStep = 1,
      rightBtnClicked,
      leftBtnClicked,
      hideActionBtns = false,
    },
    ref
  ) => {
    const [currentStep, setCurrentStep] = useState<number>(defaultStep);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    // Expose methods to parent via ref
    useImperativeHandle(ref, () => ({
      next: handleNext,
      previous: handlePrevious,
      goToStep: handleStepClick,
      getCurrentStep: () => currentStep,
      getCompletedSteps: () => completedSteps,
    }));

    // Send current step to parent component
    useEffect(() => {
      getCurrentStep?.(currentStep);
      return () => {
        // Cleanup
      };
    }, [currentStep, getCurrentStep]);

    // Progress container width calculation
    const progressContainerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);

    useLayoutEffect(() => {
      if (progressContainerRef.current) {
        setContainerWidth(progressContainerRef.current.offsetWidth);
      }
    }, []);

    // Step label height calculation
    const itemLabelRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [maxLabelHeight, setMaxLabelHeight] = useState<number>(0);

    useLayoutEffect(() => {
      const heights = itemLabelRefs.current.map(
        (ref) => ref?.offsetHeight || 0
      );
      setMaxLabelHeight(Math.max(...heights));
    }, [containerWidth, steps.length, currentStep]);

    const totalSteps = steps.length;

    const handleNext = () => {
      if (currentStep < totalSteps) {
        setCompletedSteps((prev) => [...prev, currentStep]);
        setCurrentStep((prev) => prev + 1);
      }
    };

    const handlePrevious = () => {
      if (currentStep > 1) {
        setCompletedSteps((prev) =>
          prev.filter((step) => step !== currentStep - 1)
        );
        setCurrentStep((prev) => prev - 1);
      }
    };

    const handleStepClick = (stepNumber: number) => {
      if (stepNumber <= currentStep || completedSteps.includes(stepNumber)) {
        setCurrentStep(stepNumber);
      }
    };

    const getStepStatus = (
      stepNumber: number
    ): "completed" | "current" | "upcoming" => {
      if (completedSteps.includes(stepNumber)) return "completed";
      if (stepNumber === currentStep) return "current";
      if (stepNumber < currentStep) return "completed";
      return "upcoming";
    };

    const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

    return (
      <div
        className={cn(
          "w-full mx-auto h-full overflow-hidden",
          classNames?.mainContainerClass
        )}
      >
        <Card
          className={cn("h-full flex flex-col py-1", classNames?.cardClass)}
        >
          <CardContent className="p-4 flex flex-col h-full min-h-0">
            {/* Stepper Header */}
            <div className="shrink-0">
              {title && (
                <h2
                  className={cn(
                    "text-2xl font-bold text-center mb-4",
                    !description && "mb-8"
                  )}
                >
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-gray-600 text-center mb-8">{description}</p>
              )}

              {/* Progress Bar Container */}
              <div className="relative mb-8">
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2 z-0" />
                <div
                  className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-primary/60 to-primary/80 rounded-full transform -translate-y-1/2 z-10 transition-all duration-700 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                />
                <div
                  className="relative flex justify-between z-20"
                  ref={progressContainerRef}
                >
                  {steps.map((step, idx) => {
                    const status = getStepStatus(step.id);
                    return (
                      <div className="btn relative w-fit" key={step.id}>
                        <button
                          onClick={() => handleStepClick(step.id)}
                          className={cn(
                            "w-10 h-10 rounded-full border-4 flex hover:scale-110 items-center justify-center font-semibold text-sm transition-all duration-500 ease-in-out transform",
                            status === "completed"
                              ? "bg-primary/90 backdrop-blur-xl border-primary/80 text-white shadow-lg"
                              : status === "current"
                              ? "bg-white border-primary/80 text-primary/80 shadow-lg ring-4 ring-blue-100"
                              : "bg-white border-gray-300 text-gray-400 hover:border-gray-400"
                          )}
                        >
                          {status === "completed" ? (
                            <Check className="w-5 h-5 animate-in zoom-in duration-300" />
                          ) : (
                            <span className="animate-in fade-in duration-300">
                              {step.id}
                            </span>
                          )}
                        </button>
                        <div
                          ref={(el) => {
                            itemLabelRefs.current[idx] = el;
                          }}
                          style={{
                            width: `${containerWidth / steps.length - 45}px`,
                          }}
                          className={cn(
                            "itemLabel flex absolute top-14",
                            idx === 0
                              ? "text-left left-0"
                              : idx === steps.length - 1
                              ? "text-right right-0"
                              : "text-center right-1/2 translate-x-1/2"
                          )}
                        >
                          <h3
                            className={cn(
                              "text-sm font-medium transition-colors duration-300",
                              status === "current"
                                ? "text-primary/80"
                                : status === "completed"
                                ? "text-primary/80"
                                : "text-gray-500"
                            )}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={cn(
                              "text-xs mt-1 transition-colors duration-300",
                              status === "current"
                                ? "text-primary/60"
                                : status === "completed"
                                ? "text-primary/60"
                                : "text-gray-400"
                            )}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step Content */}
            <div
              className={cn(
                "flex-1 overflow-y-auto min-h-0",
                classNames?.contentContainerClass
              )}
              style={{ marginTop: maxLabelHeight }}
            >
              <div className="h-full animate-in slide-in-from-right-5 fade-in duration-500">
                <div
                  className={cn("stepContent h-full", classNames?.contentClass)}
                >
                  {steps[currentStep - 1]?.content}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between flex-wrap shrink-0 mt-4">
              {!hideActionBtns && <div className="flex-1" />}
              <div className="flex flex-1 justify-center items-center gap-2 text-sm text-gray-500">
                Step {currentStep} of {totalSteps}
              </div>
              {!hideActionBtns && (
                <div className="stepControls flex-1 flex items-center justify-end gap-4">
                  <Button
                    variant="outline"
                    onClick={() => leftBtnClicked(handlePrevious)}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2 transition-all duration-200 bg-transparent"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {steps[currentStep - 1]?.leftControlBtnLabel ?? "Previous"}
                  </Button>
                  <Button
                    onClick={() => rightBtnClicked(handleNext)}
                    className="flex items-center gap-2 transition-all duration-200"
                  >
                    {steps[currentStep - 1]?.rightControlBtnLabel ??
                      (currentStep === totalSteps ? "Complete" : "Next")}
                    {currentStep !== totalSteps && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
);

StepperCard.displayName = "StepperCard";

export default StepperCard;

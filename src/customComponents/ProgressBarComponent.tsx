'use client';

import { cn } from '@/lib/utils';
import React, {
    useEffect,
    useState,
    useImperativeHandle,
    forwardRef,
    ForwardRefRenderFunction
} from 'react';

interface IProgressBarComponentProps {
    progressBarClass?: string;
    steps: number[];
    getCurrentStep?: (val: number) => void;
}

// Define what the parent will have access to through the ref
export interface ProgressBarRef {
    next: () => void;
    previous: () => void;
}

const ProgressBarComponent: ForwardRefRenderFunction<ProgressBarRef, IProgressBarComponentProps> = (
    { steps, progressBarClass, getCurrentStep },
    ref
) => {
    const [currentStep, setCurrentStep] = useState(1);

    const totalSteps = steps.length;

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep((prev) => prev + 1);
        }
        console.log('setting in child');
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    // Expose methods to parent
    useImperativeHandle(ref, () => ({
        next: handleNext,
        previous: handlePrevious
    }));

    // Send the current step to the parent on update
    useEffect(() => {
        getCurrentStep?.(currentStep);
    }, [currentStep]);

    return (
        <div className={cn("flex gap-2", progressBarClass)}>
            {steps.map((_, index) => (
                <div key={index} className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden relative">
                        <div
                            className={`h-full bg-gradient-to-r from-primary/60 to-primary/80 rounded-full transition-all duration-1000 ease-out transform origin-left ${index + 1 <= currentStep ? "w-full scale-x-100" : "w-0 scale-x-0"
                                }`}
                            style={{
                                transitionDelay: (index + 1) <= currentStep ? `${index * 150}ms` : "0ms",
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Export with forwardRef
export default forwardRef(ProgressBarComponent);

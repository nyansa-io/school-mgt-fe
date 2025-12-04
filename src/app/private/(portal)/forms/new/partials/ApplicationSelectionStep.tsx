"use client";

import React from "react";

interface IApplicationSelectionStepProps {
  goToNextStep: (() => void) | undefined;
}

const ApplicationSelectionStep = ({
  goToNextStep,
}: IApplicationSelectionStepProps) => {
  const handleNextStep = () => {
    // goToNextStep();
    goToNextStep?.();
  };

  return (
    <div className="applicationSelectionStep border rounded-md p-4 px-8 h-full">
      {/* title */}
      <div className="pageHeader text-center ">
        <p className="title text-xl font-semibold">Application Selection</p>

        <p className="subHeaderText text-gray-400 text-sm">
          Choose which application form to fill
        </p>
      </div>

      {/* selections */}
      <div className="selections bg-gray-100 p-4 lg:p-6 grid grid-cols-1 md: md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {/* application form card */}
        <div
          className="applicationFormCard bg-white p-8 rounded-md shadow-md hover:shadow-lg cursor-pointer transition-shadow"
          onClick={handleNextStep}
        >
          <p className="formTitle font-semibold text-lg">
            2024-2025 Application Form
          </p>
          <p className="formDescription text-gray-500 text-sm mt-2">
            Fill out the application form for the academic year 2024-2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSelectionStep;

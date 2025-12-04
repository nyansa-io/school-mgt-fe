"use client";

import { useRouter } from "next/navigation";
import React from "react";

const YearApplications = () => {
  const navigation = useRouter()

  const goToSelectedApplication = (applicationId: string) => {
    navigation.push(`/private/admin/applications/${applicationId}/overview`)
  }

  return (
    <div className="applicationSelectionStep p-6 h-full">
      <div className="headerText">
        <p className="subHeader text-[24px] text-darkGrey">
          Application Selection
        </p>

        <p className="subText text-base mt-2 text-darkGrey">
          Choose which application within the year to work on
        </p>
      </div>

      {/* selections */}
      <div className="selections bg-gray-100 p-4 lg:p-6 grid grid-cols-1 md: md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {/* application form card */}
        <div
          className="applicationFormCard bg-white p-8 rounded-md shadow-md hover:shadow-lg cursor-pointer transition-shadow"
          onClick={()=>goToSelectedApplication('12345')}
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

export default YearApplications;

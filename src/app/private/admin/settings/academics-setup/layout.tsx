"use client";

import EnrollmentApplicationsTabs from "@/customComponents/EnrollmentApplicationsTabs";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import AcademicsSetupTabs from "./partials/AcademicSetupTabs";

export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { applicationId, eventId } = useParams();

  useEffect(() => {
    // console.log('applicationId', applicationId)
    // console.log('eventId', eventId)
    return () => {};
  }, [applicationId, eventId]);

  return (
    // <html lang="en">
    //     <body>

    <div>
      {/* Layout UI */}
      {/* Place children where you want to render a page or nested layout */}
      {/* header */}
      <div className="layoutContainer h-full ">
        {/* shared layout */}
        {!(applicationId || eventId) && (
          <div className="sharedLayout flex flex-col p-4">
            <div className="headerText">
              <p className="subHeader text-[24px] text-darkGrey">
                Academics Setup
              </p>

              <p className="subText text-base mt-2 text-darkGrey">
                Manage all setups and configurations related to Academics here.
              </p>
            </div>

            {/* tabs */}
            <div className="tabs my-6 h-[36px] sticky top-0 z-10 bg-[#f8f8fb]">
              <AcademicsSetupTabs />
            </div>
          </div>
        )}

        {/* child routes */}
        <main
          className={cn("w-full h-full", !(applicationId || eventId) && "px-4")}
        >
          {children}
        </main>
      </div>
    </div>
    //     </body>
    // </html>
  );
}

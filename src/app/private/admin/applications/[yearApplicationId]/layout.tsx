"use client";

import EnrollmentApplicationsTabs from "@/customComponents/EnrollmentApplicationsTabs";
import IconifyIcon from "@/customComponents/IconifyIcon";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { applicationId, eventId } = useParams();

  useEffect(() => {
    return () => {};
  }, [applicationId, eventId]);

  return (
    // <html lang="en">
    //     <body>

    <div>
      {/* Layout UI */}
      {/* Place children where you want to render a page or nested layout */}
      {/* page header */}
      <div className="topBar border-b bg-white z-20 px-8 py-6 sticky top-0">
        <div className="barContents mx-auto maximum-width flex items-center justify-between w-full">
          {/* left side */}
          <div className="leftSide flex items-center gap-6">
            {/* back */}
            <div className="arrowBack size-8 rounded-full bg-gray-300 cursor-pointer">
              <IconifyIcon icon="ep:back" fontSize={14} />
            </div>
            {/* header details */}
            <div className="headerDetails">
              <div className="font-semibold text-2xl mb-1 flex items-center gap-4 divide-x">
                <span className="pr-4"> Summer Applications </span>{" "}
                <span className="font-thin text-base text-gray-500">
                  5th Grade
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Monday, 5th September 2025 - Friday, 20th December</p>
            </div>
          </div>

          {/* right side */}
          <div
            className={cn(
              "currentStatus px- pr-3 py-0.4 rounded-full bg-primary/10 flex items-center gap-2 text-primary"
            )}
          >
            <IconifyIcon icon="icons8:checked" className="text-xs" />
            <p className="text-xs">In session</p>
          </div>
        </div>
      </div>

      <div className="layoutContainer h-full">
        {/* shared layout */}
        {!(applicationId || eventId) && (
          <div className="sharedLayout flex flex-col p-4">
            {/* <div className="headerText">
              <p className="subHeader text-[24px] text-darkGrey">
                Applications
              </p>

              <p className="subText text-base mt-2 text-darkGrey">
                Manage all student enrollment applications here.
              </p>
            </div> */}

            {/* tabs */}
            <div className="tabs mt-6 h-[36px] sticky top-0 z-10 bg-[#f8f8fb]">
              <EnrollmentApplicationsTabs />
            </div>
          </div>
        )}

        {/* child routes */}
        <main
          className={cn("w-full h-full", !(applicationId || eventId) && "px-5")}
        >
          {children}
        </main>
      </div>
    </div>
    //     </body>
    // </html>
  );
}

"use client";

import React, { useEffect } from "react";
// import { useRouter } from 'next/navigation'
import CustomLinkTabs from "./CustomLinkTabs";
import { ILinkTab } from "./CustomLinkTabs";
import { useParams } from "next/navigation";

type IApplicationsTitle =
  | "Overview"
  | "All Applications"
  | "Application Events";

const EnrollmentApplicationsTabs = () => {
  const { yearApplicationId } = useParams();

  useEffect(() => {
    console.log("params", yearApplicationId);
    return () => {};
  }, [yearApplicationId]);

  const settingsPages: ILinkTab<{ title: IApplicationsTitle; link: string }>[] =
    [
      {
        title: "Overview",
        link: `/private/admin/applications/${yearApplicationId}/overview`,
      },
      { title: "All Applications", link: `/private/admin/applications/${yearApplicationId}/list` },
      {
        title: "Application Events",
        link: `/private/admin/applications/${yearApplicationId}/events`,
      },
    ];

  return (
    <div>
      <div className="newTabs">
        <CustomLinkTabs tabs={settingsPages} />
      </div>
    </div>
  );
};

export default EnrollmentApplicationsTabs;

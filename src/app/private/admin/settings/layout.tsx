'use client';


import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import SettingsTabs from "./partials/SettingsTabs";

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { applicationId, eventId } = useParams()

    useEffect(() => {

        console.log('applicationId', applicationId)
        console.log('eventId', eventId)
        return () => {

        }
    }, [applicationId, eventId])



    return (
        // <html lang="en">
        //     <body>

        <div>
            <div className="layoutContainer h-full ">
                {/* {!(applicationId || eventId) && <div className="sharedLayout flex flex-col p-4">
                    <div className="headerText">
                        <p className="subHeader text-[24px] text-darkGrey">
                            Settings
                        </p>

                        <p className='subText text-base mt-2 text-darkGrey'>Manage your application settings here.</p>
                    </div>

          
                    <div className="tabs my-6 h-[36px] sticky top-0 z-10 bg-[#f8f8fb]">
                        <SettingsTabs />
                    </div>
                </div>} */}

                {/* child routes */}
                <main className={cn("w-full h-full", !(applicationId || eventId) && 'px-4')}>{children}</main>

            </div>
        </div>
        //     </body>
        // </html>
    )
}
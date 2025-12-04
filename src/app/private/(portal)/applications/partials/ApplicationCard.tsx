'use client';

import { Progress } from '@/components/ui/progress';
import ButtonLoading from '@/customComponents/Button';
import IconifyIcon from '@/customComponents/IconifyIcon';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react'

const ApplicationCard = () => {
    const router = useRouter()


    return (
        <div className='bg-white w-full rounded-lg p-6 flex flex-col gap-4'>
            {/* header */}
            <div className="Header flex items-center justify-between">
                {/* left side */}
                <div className="leftSide">
                    {/* name */}
                    <p className='font-semibold'>Emma Blankson</p>
                    {/* class */}
                    <p className='text-sm text-gray-500'>Grade 9</p>
                </div>
                {/* right side / Status */}
                <div className="rightSide">
                    <div className={cn("currentStatus px- pr-3 py-0.4 rounded-full bg-primary/10 flex items-center gap-2 text-primary")}>
                        <IconifyIcon icon='icons8:checked' className='text-xs' />
                        <p className='text-xs'>Sumbitted</p>
                    </div>
                </div>
            </div>

            {/* progress */}
            <div className="progressBar">
                <p className='text-gray-500 font-thin italic mb-1 text-sm'>Application Progress</p>
                <Progress value={70} />
            </div>

            <div className="footer space-y-2 mt-6">
                <div className="dateCreated flex items-center gap-2 text-sm">
                    <span className=''>Submitted</span>
                    <span className='text-gray-500'>5th January 2025</span>
                </div>

                <ButtonLoading title='View Progress' className='w-full' onClick={()=>router.push(`/private/applications/1`)}/>
            </div>
        </div>
    )
}

export default ApplicationCard

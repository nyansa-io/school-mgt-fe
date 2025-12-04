'use client';


import IconifyIcon from '@/customComponents/IconifyIcon';
import { cn } from '@/lib/utils';
import React from 'react'

export interface IAcademicYear {
    year: string,
    startDate: string,
    endDate: string,
    status: 'Upcoming' | 'Active' | 'Closed' | 'Archived',
    students: number | string,
    applications: number | string,
    terms: number | string
}

interface IAcademicYearCardProps {
    year: IAcademicYear
}

const AcademicYearCard = ({ year }: IAcademicYearCardProps) => {
    return (
        <div className='AcademicYearCard bg-white p-4 rounded-lg hover:shadow'>
            {/* header */}
            <div className="heading flex items-center justify-between gap-4 flex-wrap">
                {/* year name */}
                <p className='text-2xl font-semibold'>{year.year}</p>

                {/* status */}
                <div className={cn("status flex text-sm items-center gap-2 px-3 w-fit py-1 rounded-md text-white", true ? 'bg-primary' : '')}>
                    <IconifyIcon icon='gg:check-o' className='!size-6' />
                    <span>{year.status}</span>
                </div>
            </div>

            {/* the duration */}
            <div className="duration text-gray-500 flex items-center italic gap-2">
                <span>{year.startDate}</span>
                <span>-</span>
                <span>{year.endDate}</span>
            </div>

            {/* stats */}
            <div className="stats mt-4 grid grid-cols-3 gap-4">
                {/* students */}
                <div className="stat flex flex-col items-center">
                    <div className="icon text-gray-500 flex items-center gap-1">
                        <IconifyIcon icon='ph:student-fill' className='w-4' />
                        <span className='text-xs'>Students</span>
                    </div>
                    <p className='text-2xl font-semibold'>{year.students}</p>
                </div>
                {/* applications */}
                <div className="stat mx-auto text-center flex flex-col items-center">
                    <div className="icon text-gray-500 flex items-center gap-1">
                        <IconifyIcon icon='ph:student-fill' className='w-4' />
                        <span className='text-xs'>Applications</span>
                    </div>
                    <p className='text-2xl font-semibold'>{year.applications}</p>
                </div>
                <div className="stat flex  flex-col items-center">
                    <div className="icon text-gray-500 flex items-center gap-1">
                        <IconifyIcon icon='ph:student-fill' className='w-4' />
                        <span className='text-xs'>Terms</span>
                    </div>
                    <p className='text-2xl font-semibold'>{year.terms}</p>
                </div>
            </div>
        </div>
    )
}

export default AcademicYearCard

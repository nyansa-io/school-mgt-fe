'use client';

import React from 'react'
import AcademicYearCard, { IAcademicYear } from './partials/AcademicYearCard';



const academicYears: IAcademicYear[] = [
    {
        year: '2024 - 2025',
        startDate: '9/1/2024',
        endDate: '6/30/2025',
        status: 'Active',
        students: 149,
        applications: 2,
        terms: 3
    },
    {
        year: '2023 - 2024',
        startDate: '9/1/2023',
        endDate: '6/30/2024',
        status: 'Closed',
        students: 120,
        applications: 1,
        terms: 3
    },
    {
        year: '2022 - 2023',
        startDate: '9/1/2022',
        endDate: '6/30/2023',
        status: 'Archived',
        students: 100,
        applications: 1,
        terms: 2
    }
]

const Page = () => {
    return (
        <div className='AcademicYearPage bg-gray-100 p-4 lg:p-6 grid grid-cols-1 md: md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {academicYears.map((el, idx) => (
                <AcademicYearCard year={el} key={idx} />
            ))}

        </div>
    )
}

export default Page

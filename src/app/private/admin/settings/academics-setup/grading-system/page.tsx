'use client';

import React from 'react'
import GradingCards from './partials/GradingCards';

const Page = () => {
    return (
        <div className='AcademicYearPage bg-gray-100 p-4 lg:p-6 grid grid-cols-1 md: md:grid-cols-2 lg:grid-cols-3 gap-4'>
           <GradingCards />
        </div>
    )
}

export default Page

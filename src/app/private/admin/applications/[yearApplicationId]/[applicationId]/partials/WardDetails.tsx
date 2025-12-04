'use client';

import AppDivider from '@/customComponents/AppDivider';
import { GraduationCapIcon } from 'lucide-react';
import React from 'react'

const WardDetails = () => {
    return (
        <div className='bg-white p-4 rounded-lg shadow h-full'>
            {/* header */}
            <div className="headerText flex items-center gap-4">
                <GraduationCapIcon className='w-' />
                <p className='font-semibold '>
                    Ward Information
                </p>
            </div>

            <div className="informationDetails mt-8 grid grid-cols-2 gap-8">
                {/* full name  */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Full Name</p>
                    <p className="value font-semibold text-gray-600">Maxwell Konadu</p>
                </div>
                {/* date of birth */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Date of birth</p>
                    <p className="value font-semibold text-gray-600">29/1/2000</p>
                </div>
                {/* grade */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Grade applying for</p>
                    <p className="value font-semibold text-gray-600">JHS 1</p>
                </div>
                {/* previous school */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Previous School</p>
                    <p className="value font-semibold text-gray-600">Perfect Child School</p>
                </div>
                {/* loaction of previous school */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Previous School's location</p>
                    <p className="value font-semibold text-gray-600">Adenta, Accra</p>
                </div>

                <div className="space"></div>

                <div className="divider col-span-2">
                    <AppDivider text="Additional Information" position='left' />
                </div>
                {/* Medical Information */}
                <div className="fullName col-span-2">
                    <p className="label text-sm text-gray-500">Medical Information</p>
                    <p className="value bg-gray-50 p-3 mt-1 text-gray-600">No known allergies. Requires glasses for reading.</p>
                </div>

                {/* Additional Notes */}
                <div className="fullName col-span-2">
                    <p className="label text-sm text-gray-500">Additional Notes</p>
                    <p className="value bg-gray-50 p-3 mt-1 text-gray-600">Maxwell is particularly interested in the school's science program and has won several local science fair competitions.</p>
                </div>
            </div>
        </div>
    )
}

export default WardDetails

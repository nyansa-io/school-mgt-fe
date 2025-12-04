'use client';

import AppDivider from '@/customComponents/AppDivider';
import { ShieldUserIcon } from 'lucide-react';
import React from 'react'

const GuardianDetails = () => {
    return (
        <div className='bg-white p-4 rounded-lg shadow h-full'>
            {/* header */}
            <div className="headerText flex items-center gap-4">
                <ShieldUserIcon className='w-' />
                <p className='font-semibold '>
                    Guardian Details
                </p>
            </div>

            <div className="informationDetails mt-8 grid grid-cols-2 gap-8">
                {/* full name  */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Full Name</p>
                    <p className="value font-semibold text-gray-600">Stephen Konadu</p>
                </div>
                {/* Address */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Address</p>
                    <p className="value font-semibold text-gray-600">P.O.Box 1432 Accra</p>
                </div>
                {/* Place of Residence */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Place of Residence</p>
                    <p className="value font-semibold text-gray-600">Adenta SSNIT Flats</p>
                </div>
                {/* Email */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Email</p>
                    <p className="value font-semibold text-gray-600">stephk@gmail.com</p>
                </div>
                {/* Relationship to Student */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Relationship to ward</p>
                    <p className="value font-semibold text-gray-600">Father</p>
                </div>

                {/* Relationship to Student */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Phone Number</p>
                    <p className="value font-semibold text-gray-600">+233 244214504</p>
                </div>
                {/* Emergency Contact */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Emergency</p>
                    <p className="value font-semibold text-gray-600">+233 244214504</p>
                </div>

                <div className="divider col-span-2">
                    <AppDivider text="Employment Information" position='left' />
                </div>
                {/* Occupation */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Occupation</p>
                    <p className="value font-semibold text-gray-600">Medical Doctor</p>
                </div>

                {/* Emergency Contact */}
                <div className="fullName">
                    <p className="label text-sm text-gray-500">Place of Work</p>
                    <p className="value font-semibold text-gray-600">Korle Bu Teaching Hospital</p>
                </div>
            </div>
        </div>
    )
}

export default GuardianDetails

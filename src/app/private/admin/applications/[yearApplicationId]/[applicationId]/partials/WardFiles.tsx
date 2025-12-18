'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { FileArchiveIcon } from 'lucide-react';
import React from 'react'

const WardFiles = () => {
    return (
        <div className='bg-white p-4 rounded-lg shadow h-full pb-40'>
            {/* header */}
            <div className="headerText flex items-center gap-4">
                <FileArchiveIcon className='' />
                <p className='font-semibold '>
                    Ward Files
                </p>
            </div>

            <div className="informationDetails mt-8 grid grid-cols-2 gap-4">
                {/* passport pics */}
                {/* full name  */}
                <div className="fullName col-span-2 pb-4 border-b">
                    <p className="label text-sm text-gray-500">Passport pics</p>
                    <div className="passportPics mt-1 flex items-center gap-4">
                        <Avatar className='w-full size-24 rounded-sm'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                        </Avatar>
                        <Avatar className='w-full size-24 rounded-sm'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                <div className="inoculationNBirth grid grid-cols-2 col-span-2 gap-4 border-b pb-4">
                    {/* inculation and weighing cert */}
                    <div className="inoculation border-r">
                        <p className="label text-sm text-gray-500">Inoculation and weighing Certificate</p>
                        <div className="passportPics mt-1 flex items-center gap-4">
                            <Avatar className='w-full size-24 rounded-sm'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                            </Avatar>
                            <Avatar className='w-full size-24 rounded-sm'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    <div className="birth cert">
                        <p className="label text-sm text-gray-500">Birth Certificate</p>
                        <div className="passportPics mt-1 flex items-center gap-4">
                            <Avatar className='w-full size-24 rounded-sm'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                            </Avatar>
                            <Avatar className='w-full size-24 rounded-sm'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                </div>


                <div className="termReports col-span-2 pb-4 border-b">
                    <p className="label text-sm text-gray-500">Term Reports</p>
                    <div className="passportPics mt-1 flex items-center gap-4">
                        <Avatar className='w-full size-24 rounded-sm'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                        </Avatar>
                        <Avatar className='w-full size-24 rounded-sm'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                <div className="testimonial col-span-2">
                    <p className="label text-sm text-gray-500">Testimonials</p>
                    <div className="passportPics mt-1 flex items-center gap-4">
                        <Avatar className='w-full size-24 rounded-sm'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                        </Avatar>
                        <Avatar className='w-full size-24 rounded-sm'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WardFiles

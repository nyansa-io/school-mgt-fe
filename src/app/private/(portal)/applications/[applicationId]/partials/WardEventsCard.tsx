'use client'


import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ApplicationEventModal from '@/customComponents/ApplicationEventModal'
import ButtonLoading from '@/customComponents/Button'
import Link from 'next/link'
import React, { useState } from 'react'

const WardEventsCard = () => {
    const [showApplicationEventModal, setshowApplicationEventModal] = useState<boolean>(false)


    return (
        <div className='eventCard bg-white rounded-lg grid grid-cols-2 gap-4 w-full border p-2 h-[200px] hover:shadow'>
            {/* event banner */}
            <div className="eventBanner max-h-full h-full col-span-1 overflow-hidden">
                <Avatar className='w-full rounded-md h-full'>
                    <AvatarImage src="https://github.com/shadcn.png" className='max-h-full object-cover aspect-auto' />
                    <AvatarFallback className='rounded-md'>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                </Avatar>
            </div>

            {/* event information */}
            <div className="eventInformation flex flex-col space-y-2">
                <p className="eventName font-semibold">Event Name</p>
                {/* event date and time */}
                <div className="eventDateNTime text-gray-500 text-sm">
                    <span>15th May, 2025</span> | <span>10:00 AM - 05:00PM</span>
                </div>

                {/* event type */}
                <div className="eventType">
                    <span className='text-sm text-gray-500'>Event Type: <span className='font-semibold text-black'>In-Person</span></span>
                </div>

                {/* event location */}
                <div className="eventLocation text-gray-500 text-sm mt-2">
                    <span>Accra, Ghana</span>
                </div>

                {/* footer */}
                <div className="footer flex gap-4 justify-between items-center mt-auto">
                    <div className="leftSide flex items-center space-x-4">
                        <ButtonLoading title='View Event' outline type='button' onClick={() => setshowApplicationEventModal(true)} />
                        <ButtonLoading title='View Grades' outline type='button' />
                    </div>

                </div>
            </div>

            {/* Modals */}
            <ApplicationEventModal open={showApplicationEventModal} modal={true} onOpenChange={() => setshowApplicationEventModal(false)} />
        </div>
    )
}

export default WardEventsCard

'use client';


import { SmilePlusIcon } from 'lucide-react';
import React from 'react'
import WardEventsCard from './WardEventsCard';

const InvitationsForm = () => {
    return (
        <div className='wardDetailsForm bg-white p-4 rounded-lg shadow relative'>
            {/* header */}
            <div className="headerText flex items-center gap-4">
                <SmilePlusIcon className='w-' />
                <p className='font-semibold '>
                    Application Events
                </p>
            </div>

            {/* invited events cards */}
            <div className="eventsCards mt-8 gap-4 bg-gray-50">
                {/* <EventCard /> */}
                <WardEventsCard />
            </div>
        </div>
    )
}

export default InvitationsForm

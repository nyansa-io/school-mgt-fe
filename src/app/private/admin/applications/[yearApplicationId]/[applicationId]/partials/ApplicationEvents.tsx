'use client';

import { SmilePlusIcon } from 'lucide-react';
import React from 'react'
import EventCard from './EventCard';

const ApplicationEvents = () => {
    return (
        <div className='applicationEvents bg-white p-4 rounded-lg shadow h-full'>
            {/* header */}
            <div className="headerText flex items-center gap-4">
                <SmilePlusIcon className='w-' />
                <p className='font-semibold '>
                    Application Events
                </p>
            </div>

            {/* events details */}
            <div className="eventsCards mt-8 gap-4 bg-gray-50">
              <EventCard />
            </div>
        </div>
    )
}

export default ApplicationEvents

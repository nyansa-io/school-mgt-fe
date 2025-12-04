'use client';


import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React from 'react'
import AppDivider from './AppDivider';


interface IApplicationEventModal {
    modal?: boolean;
    open: boolean;
    onOpenChange: (val?: any) => void
}


const sampleEventSubjects = [
    {
        id: 1,
        name: "Mathematics",
        overallScore: 100,
        passMark: 70,
        description: "Some Interesting stuff and things about the event. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        id: 2,
        name: "English",
        overallScore: 100,
        passMark: 70,
        description: "Some Interesting stuff and things about the event. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        id: 3,
        name: "Science",
        overallScore: 100,
        passMark: 70,
        description: "Some Interesting stuff and things about the event. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
]

const ApplicationEventModal = ({ onOpenChange, open, modal }: IApplicationEventModal) => {
    return (
        <div className='ApplicationEventModal'>
            <Dialog modal={modal} open={open} onOpenChange={onOpenChange}>
                <DialogContent className="min-w-full lg:min-w-[1200px] md:min-w-[800px] md:max-h-[95vh] max-w-screen flex flex-col">
                    <DialogHeader className='shrink-0'>
                        <DialogTitle>Event Details</DialogTitle>
                        <div className="eventImage w-full h-60 lg:h-90 overflow-hidden relative">
                            <Avatar className='w-full rounded-md h-full'>
                                <AvatarImage src="https://github.com/shadcn.png" className='max-h-full object-cover aspect-auto' />
                                <AvatarFallback className='rounded-md'>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                            </Avatar>

                            {/* event Name card */}
                            <div className="eventNameCard bg-white/50 backdrop-blur-md px-4 py-2 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <p className='font-semibold md:text-lg lg:text-2xl text-gray-800'>JHS Exams Session</p>
                                <p className='text-gray-700'>Monday, 5th 2025.</p>
                                <p className='text-xs text-gray-500 md:text-sm'>9:00AM - 5:00PM</p>
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="dialogContent flex-1 overflow-y-auto">
                        {/* online or in-person or hybrid */}
                        <div className="eventPresenceType mt-2">
                            <p className='text-sm text-gray-600 bg-gray-100 w-fit rounded-md px-4 py-1 italic'>In-Person Event</p>
                        </div>

                        {/* Event description and location */}
                        <div className="eventLocationNDescription grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {/* location  */}
                            <div className="location rounded bg-gray-50 p-4">
                                <p className="location">Greater Accra</p>
                            </div>

                            {/* description */}
                            <div className="eventDescription rounded bg-gray-50 p-4 text-sm md:text-base">
                                Some Interesting stuff and things about the event. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            </div>
                        </div>

                        {/* Event subjects */}
                        <div className="eventSubjects mt-8 bg-gray-50 rounded-m p-4">
                            <AppDivider position='center' text='Event Subjects' className='font-semibol' textClassName='text-base italic' />

                            <div className="subjectCardsContainer mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* subject card */}
                                {
                                    sampleEventSubjects.map((subject) => (
                                        <div key={subject.id} className="subjectCard bg-white hover:shadow transition-all rounded-md p-4">
                                            {/* card title */}
                                            <p className='font-semibold text-gray-700'>{subject.name}</p>

                                            {/* card details */}
                                            <div className="cardDetails grid grid-cols-2 gap-4 mt-4">
                                                {/* overall score  */}
                                                <div className="overallScore">
                                                    <p className="label text-sm text-gray-500">Overall Score</p>
                                                    <p className="value font-semibold text-gray-500">{subject.overallScore}</p>
                                                </div>
                                                {/* Pass mark  */}
                                                <div className="passMark">
                                                    <p className="label text-sm text-gray-500">Pass Mark</p>
                                                    <p className="value font-semibold text-gray-500">{subject.passMark}</p>
                                                </div>

                                                {/* Description  */}
                                                <div className="description col-span-2">
                                                    <p className="label text-sm text-gray-500">Description</p>
                                                    <p className="value  text-gray-500 bg-gray-50 p-2 mt-1">{subject.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                    </div>

                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ApplicationEventModal

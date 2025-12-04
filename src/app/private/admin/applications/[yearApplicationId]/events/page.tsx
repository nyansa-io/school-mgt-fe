'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ButtonLoading from '@/customComponents/Button';
import DataTable from '@/customComponents/datatable';
import { ColumnDef } from '@tanstack/react-table';
import { BookOpenCheckIcon, LandPlotIcon } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import NewEventSlider from './partials/NewEventSlider';

const eventData = [{
    eventName: 'Interview',
    eventDate: '10/29/2025',
    startTime: '10:00AM',
    endTime: '12:00PM',
    eventType: 'In person',
    eventLocation: 'Devops Africa Limited',
    eventUrl: 'https://meet.google.com/yjh-gywz-tbq',
    author: 'Prof Quinn Talon',
    dateCreated: '09/09/2025',
    paymentStatus: 'Free',
    amount: '50',
    currency: 'GHS',
    graded: true
}]

const page = () => {
    const router = useRouter()
    const { yearApplicationId } = useParams();

    const [showNewEvent, setshowNewEvent] = useState<boolean>(false)


    const formColumns: ColumnDef<typeof eventData[number]>[] = [
        {
            header: "Event Name",
            id: "eventName",
            cell: ({ row }: any) => (
                <div className="flex items-center gap-2">
                    {/* user image */}
                    <div className="avatar size-10">
                        <Avatar className='w-full !h-full rounded-sm'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>{row.original.eventName}</AvatarFallback>
                        </Avatar>
                    </div>

                    <div className="userInfo">
                        <p className="name font-semibold">{row.original.eventName} </p>
                        <p className='text-sm text-gray-500 max-w-[300px] text-ellipsis line-clamp-1'>Monday, 7th April 2025</p>
                    </div>
                </div>
            ),
        },
        {
            accessorKey: 'timeline',
            header: 'Event Timeline',
            cell: info => <div className='eventTimeline flex flex-col gap-1'>
                <div className="timecontainer w-fit">
                    <div className='font-semibold'>{info.row.original.eventDate}</div>
                    <div className="eventTimes text-gray-500 text-sm">
                        <span>{info.row.original.startTime}</span> - <span>{info.row.original.endTime}</span>
                    </div>
                </div>
            </div>,
        },
        {
            accessorKey: 'eventType',
            header: 'Event Type',
            cell: info => <div className='eventType '>
                <div className="inPerson flex items-center gap-2 w-fit bg-primary/10 text-primary px-4 py-1 rounded-full">
                    <LandPlotIcon className='size-4' />
                    <p>In Person</p>
                </div>
            </div>,
        },
        {
            accessorKey: 'purpose',
            header: 'Purpose',
            cell: info => <div className='purpose'>
                <div className="inPerson flex items-center gap-2 w-fit bg-orange-100 text-orange-500 px-4 py-1 rounded-full">
                    <BookOpenCheckIcon className='size-4' />
                    <p>Graded</p>
                </div>
            </div>,
        },
        {
            accessorKey: 'actions',
            header: '',
            cell: info => <div><Link href={`/private/admin/applications/${yearApplicationId}/events/1`} className='hover:underline decoration-primary text-primary'>View</Link></div>,
        },
    ]


    return (
        <div className='applicationEvents my-4'>
            {/* form headers */}
            <div className="headerText">
                <p className="subHeader text-[24px] text-darkGrey">
                    Application Events
                </p>

                <p className='subText text-base mt-2 text-darkGrey'>Manage all enrollment forms here.</p>
            </div>

            {/* tables */}
            <div className='candidateForm mt-10'>
                <DataTable tableInformationContent={<div className='pb-5 flex justify-end items-center'>
                    {/* left side */}
                    {/* <div className="leftSide">
                   <p className='text-xl font-semibold'>All Services</p>
                   <p className='mt-1 text-mediumGrey text-sm'>Manage the services you business renders here.</p>
                 </div> */}
                    {/* right side */}
                    <div className="rightSide">
                        <ButtonLoading title='Add Event' leftIcon='formkit:add' className='cursor-pointer w-fit' onClick={() => { setshowNewEvent(true) }} />
                    </div>
                </div>} columns={formColumns} data={eventData} totalPages={1} addFiltering />
            </div>

            {/* MODALS */}
            <NewEventSlider open={showNewEvent} onOpenChange={setshowNewEvent} />
        </div>
    )
}

export default page

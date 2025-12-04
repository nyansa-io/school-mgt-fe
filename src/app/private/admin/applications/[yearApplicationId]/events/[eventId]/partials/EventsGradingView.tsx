'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DataTable from '@/customComponents/datatable';
import { TableActionsComponent } from '@/customComponents/TableActionsComponent';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import React, { useState } from 'react';
import WardDetailSlider from './WardDetailSlider';
import GradingWardSlider from './GradingWardSlider';

const candidateGradingData = [
    {
        id: 1,
        firstName: 'Maxwell',
        lastName: 'Konadu',
        image: '',
        guardianFirstName: '',
        GuardianLastName: '',
        age: 12,
        grades: [{ id: 1, score: 85 }],
        status: 'Yet to be graded',
    },
    {
        id: 2,
        firstName: 'Memuna',
        lastName: 'Abdullah',
        image: '',
        guardianFirstName: 'Adamu',
        GuardianLastName: 'Abdullah',
        age: 13,
        grades: [{ id: 1, score: 90 }],
        status: 'Graded',
    },
    {
        id: 3,
        firstName: 'Kwame',
        lastName: 'Nkrumah',
        image: '',
        guardianFirstName: 'Kwesi',
        GuardianLastName: 'Nkrumah',
        age: 11,
        grades: [],
        status: 'Yet to be graded',
    },
    {
        id: 4,
        firstName: 'Amina',
        lastName: 'Yeboah',
        image: '',
        guardianFirstName: 'Yusuf',
        GuardianLastName: 'Yeboah',
        age: 12,
        grades: [{ id: 1, score: 88 }],
        status: 'Graded',
    },
    {
        id: 5,
        firstName: 'Kojo',
        lastName: 'Mensah',
        image: '',
        guardianFirstName: 'Kofi',
        GuardianLastName: 'Mensah',
        age: 13,
        grades: [],
        status: 'Yet to be graded',
    },
]


const EventsGradingView = () => {
    const [showWard, setshowWard] = useState(false);
    const [showGradingWardSlider, setshowGradingWardSlider] = useState<boolean>(false)

    const tableActions = [
        { component: 'View Ward', onClick: (data: any) => { setshowWard(true) }, icon: 'carbon:data-view' },
        { component: 'Grade Ward', onClick: () => { setshowGradingWardSlider(true) }, icon: 'carbon:task-add' },
        // { component: 'Approve Grades', onClick: () => { }, icon: 'carbon:task-approved' },

    ]

    const formColumns: ColumnDef<typeof candidateGradingData[number]>[] =
        [
            {
                header: "Candidate",
                id: "candidate",
                cell: ({ row }: any) => (
                    <div className="flex items-center gap-2">
                        {/* user image */}
                        <div className="avatar size-10">
                            <Avatar className='w-full !h-full rounded-sm'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>{row.original.firstName?.at?.(1)}{row.original.lastName?.at?.(1)}</AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="userInfo">
                            <p className="name">{row.original.firstName} {row.original.lastName}</p>
                            <p className='text-xs text-gray-400 max-w-[300px] text-ellipsis line-clamp-1'>Monday, 7th April 2025</p>
                        </div>
                    </div>
                ),
            },
            {
                accessorKey: 'guardian',
                header: 'Guardian Name',
                cell: info => `${info.row.original.firstName} ${info.row.original.lastName}`,
            },
            {
                accessorKey: 'age',
                header: 'Age',
                cell: info => info.row.original.age,
            },
            {
                accessorKey: 'status',
                header: 'Status',
                cell: info => <div className={cn('flex items-center gap-2 px-5 py-1.5 rounded-full w-fit text-xs', info.row.original.status === 'Graded' ? 'bg-blue-50' : info.row.original.status === 'Yet to be graded' ? 'bg-red-50' : 'text-green-50')}>
                    <div className={cn("statusContens", info.row.original.status === 'Graded' ? 'text-blue-500' : info.row.original.status === 'Yet to be graded' ? 'text-red-500' : 'text-green-700',)}>
                        {info.row.original.status}
                    </div>
                </div>
            },
            {
                accessorKey: 'invitationStatus',
                header: 'Send Invitation',
                // cell: info => <div><Switch id="invitationStatus" defaultChecked={!!(info.row.original.invitations.length)} disabled={!!(info.row.original.invitations.length)} onCheckedChange={() => { }} /> </div>,
                cell: info => <TableActionsComponent title='Actions' actions={tableActions} rowData={info.row.original} />,
            },
        ]


    return (
        <div className='eventsGradingView'>
            {/* tables */}
            <div className='candidateForm mt-10'>
                <DataTable tableInformationContent={<div className='pb-5 flex items-center justify-between'>
                    {/* left side */}
                    <div className="leftSide">
                        <p className='text-xl font-semibold'>Candidates Graded/Grading List</p>
                        <p className='mt-1 text-gray-500 text-sm'>This table is a list of all wards who have written the exams for this event and are either waiting to be graded or has already been graded.</p>
                    </div>

                    {/* right side */}
                </div>} columns={formColumns} data={candidateGradingData} totalPages={1} addFiltering />
            </div>


            {/* MODALS */}
            {/* ward Details Modal */}
            <WardDetailSlider open={showWard} onOpenChange={() => { setshowWard(false) }} />
            {/* grading ward slider */}
            <GradingWardSlider open={showGradingWardSlider} onOpenChange={() => { setshowGradingWardSlider(false) }} />
        </div>
    )
}

export default EventsGradingView

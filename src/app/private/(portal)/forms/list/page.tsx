'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ButtonLoading from '@/customComponents/Button';
import DataTable from '@/customComponents/datatable';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const enlistmentFormData = [
  {
    id: 1,
    firstName: 'Maxwell',
    lastName: 'Konadu',
    image: '',
    guardianFirstName: '',
    GuardianLastName: '',
    progress: 79,
    class: 'JHS 1'
  }
]

const Page = () => {
  const router = useRouter()

  const formColumns: ColumnDef<typeof enlistmentFormData[number]>[] =
    [
      {
        header: "Candidate",
        id: "candidate",
        cell: ({ row }: { row: { original: typeof enlistmentFormData[number] } }) => (
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
        cell: _info => `${_info.row.original.firstName} ${_info.row.original.lastName}`,
      },
      {
        accessorKey: 'class',
        header: 'Class',
        cell: _info => _info.row.original.class,
      },
      {
        accessorKey: 'progress',
        header: 'Progress',
        cell: _info => <div><progress value={_info.row.original.progress} className='rounded-full overflow-hidden' /></div>,
      },
      {
        accessorKey: 'actions',
        header: '',
        cell: _info => <div><Link href={'#'} className='hover:underline decoration-primary text-primary'>View</Link></div>,
      },
    ]

  return (
    <div className='formPage my-4 px-4'>
      {/* form headers */}
      <div className="headerText">
        <p className="subHeader text-[24px] text-darkGrey">
          Enrollment Forms
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
            <ButtonLoading title='Add Form' leftIcon='formkit:add' className='cursor-pointer w-fit' onClick={() => { router.push('/private/forms/new') }} />
          </div>
        </div>} columns={formColumns} data={enlistmentFormData} totalPages={1} addFiltering />
      </div>
    </div>
  )
}

export default Page

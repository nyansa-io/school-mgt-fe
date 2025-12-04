'use client';

import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DataTable from '@/customComponents/datatable';
import { ColumnDef } from '@tanstack/react-table';
import { Switch } from '@/components/ui/switch';
import { LoaderCircleIcon } from 'lucide-react';
import ConfirmationDialog from '@/customComponents/ConfirmationDialog';
import ButtonLoading from '@/customComponents/Button';


const enlistmentFormData = [
  {
    id: 1,
    firstName: 'Maxwell',
    lastName: 'Konadu',
    image: '',
    guardianFirstName: '',
    GuardianLastName: '',
    class: 'JHS 1',
    invitations: [{ id: 1, status: true }],
  },
  {
    id: 2,
    firstName: 'Memuna',
    lastName: 'Abdullah',
    image: '',
    guardianFirstName: 'Adamu',
    GuardianLastName: 'Abdullah',
    class: 'JHS 1',
    invitations: [],
  }
]


const ApplicationCandidatesView = () => {
  let timer: any;
  let timerAll: any;

  const [formattedData, setformattedData] = useState([...enlistmentFormData])
  const [selectedCandidate, setselectedCandidate] = useState<typeof enlistmentFormData[number]>({} as any)
  const [showConfirmInvitationDialog, setShowconfirmInvitationDialog] = useState<boolean>(false)


  const [showConfirmAllInvitationDialog, setShowConfirmAllInvitationDialog] = useState<boolean>(false);

  const handleSendInvitation = (candidate: typeof enlistmentFormData[number]) => {
    setselectedCandidate(candidate)
    setShowconfirmInvitationDialog(true)
  }

  //delete these states later
  const [loading, setloading] = useState<boolean>(false)
  const [loadingAll, setloadingAll] = useState<boolean>(false)

  const handleConfirmSendAllInvitation = () => {
    // Implement logic to send invitations to all candidates here
    setShowConfirmAllInvitationDialog(false);
    setloadingAll(true)
    timerAll = setTimeout(() => {
      // update the formatted data state to reflect the change
      setformattedData((prev) => {
        return prev.map((item) => {
          if (!item.invitations.length) {
            return { ...item, invitations: [{ id: Math.random(), status: true }] }
          }
          return item
        })
      })
      setloadingAll(false)
    }, 2000);
  }

  const handleConfirmSendInvitation = () => {
    setloading(true)
    timer = setTimeout(() => {
      // update the formatted data state to reflect the change
      setformattedData((prev) => {
        return prev.map((item) => {
          if (item.id === selectedCandidate.id) {
            return { ...item, invitations: [{ id: Math.random(), status: true }] }
          }
          return item
        })
      })
      setloading(false)
      setShowconfirmInvitationDialog(false)
    }, 2000);
  }


  const formColumns: ColumnDef<typeof enlistmentFormData[number]>[] =
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
        accessorKey: 'class',
        header: 'Class',
        cell: info => info.row.original.class,
      },
      {
        accessorKey: 'invitationStatus',
        header: 'Send Invitation',
        // cell: info => <div><Switch id="invitationStatus" defaultChecked={!!(info.row.original.invitations.length)} disabled={!!(info.row.original.invitations.length)} onCheckedChange={() => { }} /> </div>,
        cell: info => <div className='switchContinainer flex items-center gap-1'><Switch id="invitationStatus" checked={!!(info.row.original.invitations.length)} disabled={!!(info.row.original.invitations.length)} onCheckedChange={() => {
          handleSendInvitation(info.row.original)
        }} /> {(loading && info.row.original.id == selectedCandidate.id) && <LoaderCircleIcon className='animate-spin' />} </div>,
      },
    ]

  useEffect(() => {
    return () => {
      clearTimeout(timer)
      clearTimeout(timerAll)
    }
  }, [])


  return (
    <div className='applicationCandidatesView'>
      {/* tables */}
      <div className='candidateForm mt-10'>
        <DataTable tableInformationContent={<div className='pb-5 flex items-center justify-between'>
          {/* left side */}
          <div className="leftSide">
            <p className='text-xl font-semibold'>Candidate List</p>
            <p className='mt-1 text-gray-500 text-sm'>This table is a list of all wards whose applications have been deemed qualified and accepted.</p>
          </div>

          {/* right side */}
          <div className="rightSide">
            {/* future use */}
            <ButtonLoading title='Invite all Candidates' onClick={() => setShowConfirmAllInvitationDialog(true)} loading={loadingAll} />
          </div>
        </div>} columns={formColumns} data={formattedData} totalPages={1} addFiltering />
      </div>

      {/* MODALS */}
      {/* invite individual candidates */}
      <ConfirmationDialog open={showConfirmInvitationDialog} onClose={() => setShowconfirmInvitationDialog(false)} onConfirm={handleConfirmSendInvitation} header='Confirm Invitation' description={<p>Are you sure you want to send <span className='font-semibold text-gray-700'>{selectedCandidate.firstName} {selectedCandidate.lastName}</span> an invitation to this event? This action cannot be undone after submission</p>} confirmText='Send Invite' />
      {/* invite all candidates */}
      <ConfirmationDialog open={showConfirmAllInvitationDialog} onClose={() => setShowConfirmAllInvitationDialog(false)} onConfirm={handleConfirmSendAllInvitation} header='Confirm Invitation!' description={`Are you sure you want to send all candidates an invitation to this event? This action cannot be undone after submission`} confirmText='Send Invitations' />
    </div>
  )
}

export default ApplicationCandidatesView

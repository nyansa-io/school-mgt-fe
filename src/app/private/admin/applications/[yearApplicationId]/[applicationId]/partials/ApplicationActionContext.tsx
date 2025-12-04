'use client';


import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { SwitchFormField, TextAreaFormField } from '@/customComponents/FormFields';
import ButtonLoading from '@/customComponents/Button';
import { InfoIcon } from 'lucide-react';

const applicationFormActionSchema = z.object({})

const invitationFormActionSchema = z.object({})

const ApplicationActionContext = () => {
    const [paid, setpaid] = useState(false)
    const [underReview, setunderReview] = useState(false)
    const [applicationAccepted, setapplicationAccepted] = useState<boolean>(false)

    const applicationFormActionForm = useForm<z.infer<typeof applicationFormActionSchema>>({
        resolver: zodResolver(applicationFormActionSchema),
    })

    const invitationFormActionForm = useForm<z.infer<typeof invitationFormActionSchema>>({
        resolver: zodResolver(invitationFormActionSchema),
    })

    return (
        <>
            <div className='bg-white p-4 rounded-lg shadow'>
                {!applicationAccepted && <div className="headerTexts">
                    {/* header */}
                    <div className="headerText flex items-center gap-4">
                        {/* <ShieldUserIcon className='w-' /> */}
                        <p className='font-semibold '>
                            Review Actions
                        </p>
                    </div>
                    <p className="subheader text-sm text-gray-500">
                        Add notes and update the application status
                    </p>
                </div>}

                {!applicationAccepted && <div className="actions mt-8 ">
                    <Form {...applicationFormActionForm}>
                        <form action="" className='space-y-2'>
                            {underReview &&
                                <div className='space-y-2'>

                                    <TextAreaFormField form={applicationFormActionForm} name='review Note' label='Review Note' />
                                    <div className="formsToUpdateRequests bg-gray-50 p-3 space-y-4">
                                        <p className='font-semibold text-sm text-gray-500'>Select part of the form in which an update is required </p>
                                        <SwitchFormField form={applicationFormActionForm} name={'wardDetailUpdateRequest'} label='Request Update to the Ward Details' className='flex gap-4 flex-row-reverse justify-end' />
                                        <SwitchFormField form={applicationFormActionForm} name={'wardFileUpdateRequest'} label='Request Update to the Ward Files and Documents' className='flex gap-4 flex-row-reverse justify-end' />
                                        <SwitchFormField form={applicationFormActionForm} name={'guardianDetailUpdateRequest'} label='Request Update to the Guardian Details' className='flex gap-4 flex-row-reverse justify-end' />
                                    </div>
                                    <ButtonLoading title={'Request Update'} className='w-full gap-4 bg-blue-500 hover:bg-blue-600' leftIcon={<InfoIcon />} type='button' />
                                </div>

                            }

                            <div className="actionBtns space-y-2 mt-8">
                                {(paid && !underReview) && <ButtonLoading title={'Mark Under Review'} className='w-full gap-4 border-gray-500 text-gray-600' leftIcon={<InfoIcon />} outline type='button' onClick={() => { setunderReview(true) }} />}

                                <div className="approveOrAccept">
                                    {(paid && underReview) &&
                                        <ButtonLoading title={'Accept Application'} className='w-full gap-4' leftIcon={<InfoIcon />} type='button' onClick={() => setapplicationAccepted(true)} />
                                    }
                                    {(!paid && !underReview) && <ButtonLoading title={'Confirm Payment'} className='w-full gap-4' leftIcon={<InfoIcon />} onClick={() => setpaid(true)} type='button' />}
                                </div>
                                <ButtonLoading title={'Reject Application'} className='w-full gap-4 bg-red-500 hover:bg-red-600' leftIcon={<InfoIcon />} type='button' />
                            </div>
                        </form>
                    </Form>
                </div>}
                {/* invitations */}
                {applicationAccepted && <div className="eventInvitations mt-8">
                    <div className="headerTexts">
                        <div className="headerText flex items-center gap-4">
                            {/* <ShieldUserIcon className='w-' /> */}
                            <p className='font-semibold '>
                                Events Invitations
                            </p>
                        </div>
                        <p className="subheader text-sm text-gray-500">
                            Invite the applicant to participate in these crutial events.
                        </p>
                    </div>

                    {/* invitations */}
                    <Form {...invitationFormActionForm}>
                        <form className="formsToUpdateRequests bg-gray-50 p-3 space-y-4 mt-2">
                            <p className='font-semibold text-sm text-gray-500'>Switch on which events participant must attend </p>
                            <SwitchFormField form={invitationFormActionForm} name={'interview'} label='Student Interview Session' className='flex gap-4 flex-row-reverse justify-end' />
                            <SwitchFormField form={invitationFormActionForm} name={'exams'} label='Entrance Exams' className='flex gap-4 flex-row-reverse justify-end' />

                            <div className="btns">
                                <ButtonLoading title={'Send Invitations'} className='w-full gap-4' leftIcon={<InfoIcon />} type='button' />
                            </div>
                        </form>
                    </Form>
                </div>}

            </div>

{/* 
            <div className="gradeEventsContainer bg-white p-4 rounded-lg shadow mt-4">
                <div className="gradeEvents ">
                    <div className="headerTexts">
                        <div className="headerText flex items-center gap-4">
                            <p className='font-semibold '>
                                Accept Candidate
                            </p>
                        </div>
                        <p className="subheader text-sm text-gray-500">
                            Record the grades of candidates who partook in the events.
                        </p>
                    </div>

                    <Form {...invitationFormActionForm}>
                        <form className="formsToUpdateRequests bg-gray-50 p-3 space-y-4 mt-2">
                            <p className='font-semibold text-sm text-gray-500'>Switch on which events participant must attend </p>
                            <SwitchFormField form={invitationFormActionForm} name={'interview'} label='Student Interview Session' className='flex gap-4 flex-row-reverse justify-end' />
                            <SwitchFormField form={invitationFormActionForm} name={'exams'} label='Entrance Exams' className='flex gap-4 flex-row-reverse justify-end' />

                            <div className="btns">
                                <ButtonLoading title={'Send Invitations'} className='w-full gap-4' leftIcon={<InfoIcon />} type='button' />
                            </div>
                        </form>
                    </Form>
                </div>
            </div> */}
        </>
    )
}

export default ApplicationActionContext

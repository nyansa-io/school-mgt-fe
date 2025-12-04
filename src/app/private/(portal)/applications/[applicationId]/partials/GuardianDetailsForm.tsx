'use client';

import React from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import AppDivider from '@/customComponents/AppDivider';
import { InputFormField, PhoneNumberFormField, SelectFormField } from '@/customComponents/FormFields';
import { useForm } from 'react-hook-form';
import { LockKeyholeIcon, LockKeyholeOpenIcon } from 'lucide-react';
import ButtonLoading from '@/customComponents/Button';

const guardianSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    occupation: z.string(),
    placeOfWork: z.string(),
    address: z.string(),
    phoneNumber: z.string(),
    emergencyContact: z.string(),
    email: z.string(),
    residence: z.string()
})

const GuardianDetailsForm = () => {
    const guardianForm = useForm<z.infer<typeof guardianSchema>>({
        resolver: zodResolver(guardianSchema),
    })

    return (
        <div className='wardDetailsForm bg-white p-4 rounded-lg shadow relative'>
            <div className="headerTexts pr-10">
                <div className="headerText flex items-center gap-4">
                    {/* <ShieldUserIcon className='w-' /> */}
                    <p className='font-semibold '>
                        Ward Details Form
                    </p>
                </div>
                <p className="subheader text-sm text-gray-500">
                    These are the details of the ward. If the padlock icon is closed, the form is read-only.
                    But if it is open, the form can be edited or an edit request has been made.
                </p>
            </div>

            {/* padlock icon */}
            <div className="padlockIcon absolute top-4 right-4 ">
                {false ? <LockKeyholeIcon className='!w-5 text-gray-400' /> :
                    <LockKeyholeOpenIcon className='!w-5 text-primary' />}
            </div>


            {/* guardian form */}
            <div className="guardianForm mt-10">
                <Form {...guardianForm}>
                    <form action="" className='p-4 px-6 space-y-4' >
                        <div className="mt-2">
                            <AppDivider text='Parent/Guardian Information' position='center' className='' />
                        </div>
                        <div className="guardianInfo grid grid-cols-2 gap-4">
                            <InputFormField form={guardianForm} name='firstName' label='First Name' />
                            <InputFormField form={guardianForm} name='lastName' label='Last Name' />
                            <InputFormField form={guardianForm} name='address' label='Address' />
                            <InputFormField form={guardianForm} name='residence' label='Place of Residence' />
                            <InputFormField form={guardianForm} name='email' label='Email' />
                            <SelectFormField form={guardianForm} name='relationship' label='Relationship' options={[]} />
                            <PhoneNumberFormField form={guardianForm} name="phoneNumber" label="Phone Number" />
                            <PhoneNumberFormField form={guardianForm} name="emergencyContact" label="Emergency Contact" />
                        </div>

                        <div className="mt-8">
                            <AppDivider text='Guardian Occupation' position='center' />
                        </div>
                        <div className="guardianInfo grid grid-cols-2 gap-4">
                            <InputFormField form={guardianForm} name='occupation' label='Occupation' />
                            <InputFormField form={guardianForm} name='placeOfWork' label='Place of work' />
                        </div>

                        <div className="submitBtn mt-6">
                            <ButtonLoading title='Submit Update' />
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default GuardianDetailsForm

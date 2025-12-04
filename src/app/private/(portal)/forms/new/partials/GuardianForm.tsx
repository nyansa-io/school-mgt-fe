'use client';

import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import AppDivider from '@/customComponents/AppDivider';
import { InputFormField, PhoneNumberFormField, SelectFormField } from '@/customComponents/FormFields';

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

const GuardianForm = () => {
  const guardianForm = useForm<z.infer<typeof guardianSchema>>({
    resolver: zodResolver(guardianSchema),
  })


  return (
    <div className='guardianForm h-full flex flex-col'>
      <div className="pageHeader text-center ">
        <p className="title text-xl font-semibold">
          Parent/Guardian Form
        </p>

        <p className='subHeaderText text-gray-400 text-sm'>Fill in the form of the parent or guardian</p>
      </div>

      <div className="pageContent mt-8 flex-1 grid grid-cols-2 gap-8 py-1">
        {/* form section */}
        <section className="Form hover:shadow rounded-lg bg-white border">
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
            </form>
          </Form>
        </section>

        {/* Hero section */}
        <section className="hero rounded-lg overflow-hidden">
          <img src='https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg' className='size-full' />
        </section>
      </div>
    </div>
  )
}

export default GuardianForm

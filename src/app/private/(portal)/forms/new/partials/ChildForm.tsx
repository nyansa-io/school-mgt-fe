'use client';


import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import AppDivider from '@/customComponents/AppDivider';
import { InputFormField, PhoneNumberFormField, SelectFormField, TextAreaFormField } from '@/customComponents/FormFields';
import { AVAILABLE_CLASSES } from '@/constants/FormConstants';
import IconifyIcon from '@/customComponents/IconifyIcon';

const childFormSchema = z.object({
})

const ChildForm = () => {
    const childForm = useForm<z.infer<typeof childFormSchema>>({
        resolver: zodResolver(childFormSchema),
    })


    return (
        <div className='childForm h-full flex flex-col'>
            <div className="pageHeader text-center shrink-0">
                <p className="title text-xl font-semibold">
                    Child/Ward Form
                </p>

                <p className='subHeaderText text-gray-400 text-sm'>A ward is the child seeking admission to Sunflower</p>
            </div>


            {/* child form */}
            <div className="formContents flex-1 flex flex-col">
                <Form {...childForm}>
                    <form action="" className='h-full flex flex-col'>

                        <div className="pageContent mt-8 flex-1 grid grid-cols-2 gap-8 py-1">
                            {/* form section */}
                            <section className="Form hover:shadow border rounded-lg bg-white">
                                <div className='p-4 px-6 space-y-4' >
                                    <div className="mt-2">
                                        <AppDivider text="Child/Ward's Information" position='center' className='' />
                                    </div>
                                    <div className="guardianInfo grid grid-cols-2 gap-4">
                                        <InputFormField form={childForm} name='firstName' label='First Name' />
                                        <InputFormField form={childForm} name='firstName' label='Last Name' />
                                        <InputFormField form={childForm} name='firstName' label='Other Names' />
                                        <InputFormField form={childForm} name='dateOfBirth' label='Date of Birth' type='date' />
                                    </div>

                                    <div className="mt-8">
                                        <AppDivider text='Application Information' position='center' />
                                    </div>
                                    <div className="applicationInfo grid grid-cols-2 gap-4">
                                        <SelectFormField form={childForm} name='occupation' label='Class applying to' options={AVAILABLE_CLASSES} />
                                        <InputFormField form={childForm} name='previousSchool' label='Previous School' />
                                        <InputFormField form={childForm} name='previousSchoolLocation' label='Previous School Location' />
                                    </div>

                                    <div className="mt-8">
                                        <AppDivider text='Additional Information' position='center' />
                                    </div>
                                    <div className="applicationInfo grid grid-cols-2 gap-4">
                                        <TextAreaFormField form={childForm} name='medicalInformation' label='Medical Information' />
                                        <TextAreaFormField form={childForm} name='additionalNotes' label='Additional Information' />
                                    </div>
                                </div>
                            </section>

                            {/* Hero section */}
                            <section className="files hover:shadow border rounded-lg bg-white">
                                <div className="filesContainer p-4 px-6 space-y-4">
                                    <div className="mt-2">
                                        <AppDivider text="Child/Ward's Files" position='center' className='' />
                                        <div className="fileUploadContainer mt-4 grid grid-cols-2 gap-4">
                                            {/* PAssport pics */}
                                            <div className="termReports col-span-2 grid grid-cols-2 gap-4">
                                                {/* Term reports */}
                                                <div className="imageSelection ">
                                                    <label htmlFor='productImages' className=' flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive'>Passport pics <span className='text-red-500'>*</span></label>
                                                    <div className="selectionContainer bg-[#F7F9FF] h-[100px] border border-dashed mt-2 rounded flex flex-col items-center justify-center gap-2">
                                                        {/* image icon */}
                                                        <IconifyIcon icon='mage:image-upload' fontSize={40} className='text-lg text-blue-600' />
                                                        <div className="textSection text-center">
                                                            <p className='text-sm'> <label className='text-blue-600' htmlFor='productImages'>Click here</label> to upload or drag and drop</p>
                                                            <p className='text-xs'>Maximum file size 2MB</p>
                                                            <input type='file' className='hidden' id='productImages' />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* file list */}
                                                <div className="fileLists bg-gray-50">

                                                </div>
                                            </div>

                                            {/* Inoculation or Weighing Form */}
                                            <div className="imageSelection ">
                                                <label htmlFor='productImages' className=' flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive'>Inoculation/Weighing Certificate <span className='text-red-500'>*</span></label>
                                                <div className="selectionContainer bg-[#F7F9FF] h-[100px] border border-dashed mt-2 rounded flex flex-col items-center justify-center gap-2">
                                                    {/* image icon */}
                                                    <IconifyIcon icon='mage:image-upload' fontSize={40} className='text-lg text-blue-600' />
                                                    <div className="textSection text-center">
                                                        <p className='text-sm'> <label className='text-blue-600' htmlFor='productImages'>Click here</label> to upload or drag and drop</p>
                                                        <p className='text-xs'>Maximum file size 2MB</p>
                                                        <input type='file' className='hidden' id='productImages' />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Original Birth Cert */}
                                            <div className="imageSelection ">
                                                <label htmlFor='productImages' className=' flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive'>Original Birth Certificate <span className='text-red-500'>*</span></label>
                                                <div className="selectionContainer bg-[#F7F9FF] h-[100px] border border-dashed mt-2 rounded flex flex-col items-center justify-center gap-2">
                                                    {/* image icon */}
                                                    <IconifyIcon icon='mage:image-upload' fontSize={40} className='text-lg text-blue-600' />
                                                    <div className="textSection text-center">
                                                        <p className='text-sm'> <label className='text-blue-600' htmlFor='productImages'>Click here</label> to upload or drag and drop</p>
                                                        <p className='text-xs'>Maximum file size 2MB</p>
                                                        <input type='file' className='hidden' id='productImages' />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Term Reports */}
                                            <div className="termReports col-span-2 grid grid-cols-2 gap-4">
                                                {/* Term reports */}
                                                <div className="imageSelection ">
                                                    <label htmlFor='productImages' className=' flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive'>Term Reports <span className='text-red-500'>*</span></label>
                                                    <div className="selectionContainer bg-[#F7F9FF] h-[100px] border border-dashed mt-2 rounded flex flex-col items-center justify-center gap-2">
                                                        {/* image icon */}
                                                        <IconifyIcon icon='mage:image-upload' fontSize={40} className='text-lg text-blue-600' />
                                                        <div className="textSection text-center">
                                                            <p className='text-sm'> <label className='text-blue-600' htmlFor='productImages'>Click here</label> to upload or drag and drop</p>
                                                            <p className='text-xs'>Maximum file size 2MB</p>
                                                            <input type='file' className='hidden' id='productImages' />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* file list */}
                                                <div className="fileLists bg-gray-50">

                                                </div>
                                            </div>

                                            {/* Passport Pic */}
                                            <div className="imageSelection ">
                                                <label htmlFor='productImages' className=' flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive'>Testimonial from previous school <span className='text-red-500'>*</span></label>
                                                <div className="selectionContainer bg-[#F7F9FF] h-[100px] border border-dashed mt-2 rounded flex flex-col items-center justify-center gap-2">
                                                    {/* image icon */}
                                                    <IconifyIcon icon='mage:image-upload' fontSize={40} className='text-lg text-blue-600' />
                                                    <div className="textSection text-center">
                                                        <p className='text-sm'> <label className='text-blue-600' htmlFor='productImages'>Click here</label> to upload or drag and drop</p>
                                                        <p className='text-xs'>Maximum file size 2MB</p>
                                                        <input type='file' className='hidden' id='productImages' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ChildForm

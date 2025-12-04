'use client';



import { LockKeyholeIcon, LockKeyholeOpenIcon } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import AppDivider from '@/customComponents/AppDivider';
import IconifyIcon from '@/customComponents/IconifyIcon';
import ButtonLoading from '@/customComponents/Button';

const childFormSchema = z.object({
})

const WardFilesForm = () => {
    const childForm = useForm<z.infer<typeof childFormSchema>>({
        resolver: zodResolver(childFormSchema),
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

            {/* ward file forms */}
            <div className="wardFileForms mt-10">
                <Form {...childForm}>
                    <form action="">
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
                        <div className="submitBtn mt-6">
                            <ButtonLoading title='Submit Update' />
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default WardFilesForm

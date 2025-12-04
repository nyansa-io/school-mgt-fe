'use client';


import { LockKeyholeIcon, LockKeyholeOpenIcon } from 'lucide-react';
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import AppDivider from '@/customComponents/AppDivider';
import { InputFormField, SelectFormField, TextAreaFormField } from '@/customComponents/FormFields';
import { AVAILABLE_CLASSES } from '@/constants/FormConstants';
import ButtonLoading from '@/customComponents/Button';

const childFormSchema = z.object({
})


// WARD DETAILS COMPONENT

const WardDetailsForm = () => {
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
        {true ? <LockKeyholeIcon className='!w-5 text-gray-400' /> :
          <LockKeyholeOpenIcon className='!w-5 text-primary' />}
      </div>


      {/* ward form */}
      <div className="wardForm mt-10">
        <Form {...childForm}>
          <form action="" className=''>
            <div className="mt-2 mb-2">
              <AppDivider text="Child/Ward's Information" position='center' className='' />
            </div>
            <div className="guardianInfo grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputFormField form={childForm} name='firstName' label='First Name' disabled />
              <InputFormField form={childForm} name='firstName' label='Last Name' disabled />
              <InputFormField form={childForm} name='firstName' label='Other Names' disabled />
              <InputFormField form={childForm} name='dateOfBirth' label='Date of Birth' type='date' disabled />
            </div>

            <div className="mt-8 mb-2">
              <AppDivider text='Application Information' position='center' />
            </div>
            <div className="applicationInfo grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectFormField form={childForm} name='occupation' label='Class applying to' options={AVAILABLE_CLASSES} disabled />
              <InputFormField form={childForm} name='previousSchool' label='Previous School' disabled />
              <InputFormField form={childForm} name='previousSchoolLocation' label='Previous School Location' disabled />
            </div>

            <div className="mt-8 mb-2">
              <AppDivider text='Additional Information' position='center' />
            </div>
            <div className="applicationInfo grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextAreaFormField form={childForm} name='medicalInformation' label='Medical Information' disabled />
              <TextAreaFormField form={childForm} name='additionalNotes' label='Additional Information' disabled />
            </div>

            <div className="submitBtn mt-4">
              <ButtonLoading title='Submit Update' />
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default WardDetailsForm

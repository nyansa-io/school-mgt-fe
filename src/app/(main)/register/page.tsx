'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import React, { useRef, useState } from 'react'
import { Form } from '@/components/ui/form'
import { InputFormField, OTPFormField, PhoneNumberFormField } from '@/customComponents/FormFields'
import ButtonLoading from '@/customComponents/Button'
import Link from 'next/link'
import { OtpResendTimer } from '@/customComponents/OTPResetTimer'
import ProgressBarComponent from '@/customComponents/ProgressBarComponent'
import RegistrationCarousels from './partials/RegistrationCarousels'
import { AnimatePresence, motion } from 'framer-motion'

const registerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phoneNumber: z.string()
})

const otpSchema = z.object({
  otp: z.string().min(4, 'Must be atleast 4 digits')
})

const page = () => {
  const [currentView, setcurrentView] = useState<'OTP' | 'FORM'>('FORM')

  const progressBarRef = useRef(null)

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema)
  })

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema)
  })

  const submitRegisterAccount = (data: any) => {
    console.log('data', data)
    setcurrentView('OTP')
  }

  const handleResendOTP = () => {
    console.log('resend OTP')
  }

  return (
    <div className="registerPage mt-4 p-4 shadow border rounded-lg mb-8">
      {/* title */}
      <div className="pageHeader space-y-1 text-center">
        <p className="title text-xl font-semibold">Register</p>
        <p className="pageSubHeader text-gray-400">
          Register an account and start the application process for your ward.
        </p>
      </div>

      <div className="registrationPageContent grid grid-cols-2 gap-6 mt-6">
        <div className="form relative overflow-hidden">
          {/* Progress Bar */}
          <div className="stepperProgress w-full mb-6">
            <ProgressBarComponent steps={[1, 2]} progressBarClass="w-full" ref={progressBarRef} />
          </div>

          {/* Animated Form Views */}
          <div className="relative h-[300px]">
            <AnimatePresence mode="wait">
              {currentView === 'FORM' && (
                <motion.div
                  key="formContent"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 w-full"
                >
                  <Form {...form}>
                    <form className="space-y-3 mb-4" onSubmit={form.handleSubmit(submitRegisterAccount)}>
                      <InputFormField name="firstName" form={form} label="First Name" />
                      <InputFormField name="lastName" form={form} label="Last Name" />
                      <PhoneNumberFormField name="phoneNumber" form={form} label="Phone Number" />
                      <ButtonLoading title="Create Account" className="w-full" />
                    </form>
                    <div className="login text-sm text-right">
                      <span className="text-gray-400">Already registered? Click here to</span>{' '}
                      <Link className="text-primary" href={'/login'}>
                        Sign in
                      </Link>
                    </div>
                  </Form>
                </motion.div>
              )}

              {currentView === 'OTP' && (
                <motion.div
                  key="otpContent"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 w-full"
                >
                  <Form {...otpForm}>
                    <div className="title mb-4">An OTP was sent to your contact, submit it to activate your account.</div>
                    <form className="space-y-3 mb-4">
                      <OTPFormField form={otpForm} name="otp" maxLength={4} label="OTP" />
                      <ButtonLoading title="Submit OTP" className="w-full" />
                    </form>

                    <div className="login text-sm text-right mt-4 w-full flex justify-end items-center h-[35px]">
                      <OtpResendTimer duration={2} onResend={handleResendOTP} />
                    </div>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* instructions */}
        <div className="instructions bg-gray-50 w-full">
          <RegistrationCarousels />
        </div>
      </div>
    </div>
  )
}

export default page

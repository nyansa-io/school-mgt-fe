'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { InputFormField } from '@/customComponents/FormFields'
import ButtonLoading from '@/customComponents/Button'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const forgotPasswordSchema = z.object({
    email: z.string().min(1, 'Email or username is required'),
})

const Page = () => {
    const router = useRouter()

    const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        }
    })

    const gotToLogin = () => {
        router.push('/admin/login')
    }

    return (
        <div className='flex flex-col justify-center items-center w-[500px] mx-auto h-full'>
            <div className="headerSection text-left  w-full">
                {/* main header */}
                <p className="header ">
                    Forgot Password
                </p>

                <p className="description mt-2 text-gray-500">
                    An email will be sent to your address if you have an account with us.
                </p>
            </div>
            <Form {...forgotPasswordForm}>
                <form className='w-full flex flex-col gap-3 mt-10'>
                    <InputFormField form={forgotPasswordForm} name='email' type='email' label="Email" />

                    <ButtonLoading title='Submit' />
                </form>
                <Button variant="link" className='self-end cursor-pointer' onClick={gotToLogin}>Login</Button>
            </Form>


            
        </div>

    )
}

export default Page

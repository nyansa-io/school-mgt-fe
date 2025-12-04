'use client'

import React, { useEffect, useState } from 'react'
import { Geist, Geist_Mono } from "next/font/google";
import "@/globals.css";
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import SchoolLogo from '@/customComponents/SchoolLogo';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


type TView = 'login' | 'register' | 'forgotpassword' | 'verifyphone'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const [currentview, setcurrentview] = useState<TView>('login')
  const pathname = usePathname()

  useEffect(() => {
    // Get the current path
    const path = pathname.split('/')[1]
    // Set the current view based on the path
    console.log('path', path)
    if (path === 'login') {
      setcurrentview('login')
    } else if (path === 'register') {
      setcurrentview('register')
    } else if (path === 'forgotpassword') {
      setcurrentview('forgotpassword')
    } else if (path === 'verifyphone') {
      setcurrentview('verifyphone')
    }

    return () => {

    }
  }, [pathname])


  return (
    <html lang="en">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50 grid grid-cols-3 relative`, (pathname == '/register' || pathname == '/') && 'bg-[url(/images/register.jpg)] bg-cover bg-center bg-no-repeat flex items-center justify-center')}
      >
        {/* child routes */}
        <div className={cn('p-4 h-full flex flex-col w-full', (pathname == '/register' || pathname == '/') && 'lg:w-[900px] bg-white shadow rounded-lg',pathname == '/'&&'lg:w-[500px]')}>
          {/* logo */}
          <div className={cn("logo", (pathname == '/register' || pathname == '/') && 'mx-auto')}>
            <SchoolLogo />
          </div>

          <div className="children flex flex-col h-full w-full">
            {children}
          </div>
        </div>
        {/* hero Section */}
        {pathname !== '/register' && <div className={cn("heroSection col-span-2", `bg-[url(/images/register.jpg)] bg-cover bg-center bg-no-repeat h-full relative`)}>
        </div>}
      </body>
    </html>
  )
}

export default AuthLayout

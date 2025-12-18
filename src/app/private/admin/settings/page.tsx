'use client';


import IconifyIcon from '@/customComponents/IconifyIcon';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

interface ISettingsModuleLinkCard {
    title: string;
    description: string | React.ComponentType<any> | React.ReactElement;
    icon: string | React.ComponentType<any> | React.ReactElement;
    link: string
}

const settingsModuleLinkCards: ISettingsModuleLinkCard[] = [
    {
        title: 'User Profile',
        icon: 'lets-icons:user-cicrle-duotone',
        description: 'Manage your profile here.',
        link: '/private/admin/settings/user-profile'
    },
    {
        title: 'Academics Setup',
        icon: 'solar:square-academic-cap-2-bold-duotone',
        description: 'Setup academic year, subjects etc here.',
        link: '/private/admin/settings/academics-setup/academic-years'
    },
    {
        title: 'User Management',
        icon: 'uim:house-user',
        description: 'Setup academic year, subjects etc here.',
        link: '/private/admin/settings/user-management'
    },

]

const Page = () => {
    return (
        <div className='settingsPage my-4'>
            {/* heading */}
            <div className="headingText">
                <p className='text-lg font-bold'>Settings Page</p>
                <p className='text-sm text-gray-500'>Choose which of the settings models to work on</p>
            </div>

            {/* page cards */}
            <div className="settingModuleCards bg-gray-100 p-4 gap-4 grid md:grid-cols-3 md:p-6 lg:p-8 mt-8">
                {/* setting card */}
                {settingsModuleLinkCards.map((link, idx) => (
                    <Link href={link.link} key={idx}>
                        <div className="settingCard bg-white rounded-md border hover:shadow p-4 flex gap-4" >
                            <div className="icon">
                                {link.icon && <div className={cn("icon")}>
                                    {typeof link.icon == 'string' ? <IconifyIcon icon={link.icon} className="" /> : typeof link.icon == 'function' ? React.createElement(link.icon) : link.icon}
                                </div>}
                            </div>

                            <div className="linkInformation">
                                <p className="title font-semibold">{link.title}</p>
                                <div className="description text-gray-500 text-sm">
                                    {link.description && <div className={cn("icon")}>
                                        {typeof link.description == 'function' ? React.createElement(link.description) : link.description}
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Page

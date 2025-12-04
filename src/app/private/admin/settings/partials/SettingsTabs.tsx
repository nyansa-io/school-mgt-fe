'use client';


import React from 'react'
import { useRouter } from 'next/navigation'
import CustomLinkTabs, { ILinkTab } from '@/customComponents/CustomLinkTabs';






const settingsPages: ILinkTab<{ title: string, link: string }>[] = [
    { title: 'Academics-setup', link: '/private/admin/settings/academics-setup/academic-years' },
    { title: 'Grading System', link: '/private/admin/settings/academics-setup/grading-system' },
]


const EnrollmentApplicationsTabs = () => {
    const router = useRouter()

    const handleTabClicked = (value: any) => {
        console.log('value', value)
    }

    return (
        <div>
            <div className="newTabs">
                <CustomLinkTabs tabs={settingsPages} />
            </div>
        </div>
    )
}

export default EnrollmentApplicationsTabs
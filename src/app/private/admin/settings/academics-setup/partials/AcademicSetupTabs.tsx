'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import CustomLinkTabs, { ILinkTab } from '@/customComponents/CustomLinkTabs'



const settingsPages: ILinkTab<{ title: string, link: string }>[] = [
    { title: 'Academic Years', link: '/private/admin/settings/academics-setup/academic-years' },
    { title: 'Grading System', link: '/private/admin/settings/academics-setup/grading-system' },
    { title: 'Subjects', link: '/private/admin/settings/academics-setup/subjects' }
]


const AcademicsSetupTabs = () => {
    const router = useRouter()

    return (
        <div>
            <div className="newTabs">
                <CustomLinkTabs tabs={settingsPages} />
            </div>
        </div>
    )
}

export default AcademicsSetupTabs

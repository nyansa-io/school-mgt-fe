'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react'

interface ISchoolLogo {
    src?: string;
    size?: number;
    className?: string
    onClick?: (val?: any) => void
}



const SchoolLogo = ({ className, onClick, size, src }: ISchoolLogo) => {
    const router = useRouter()

    const handleOnClick = () => {
        if (onclick) {
            onclick
        } else {
            router.push('/')
        }
    }


    return (
        <div className={cn('schoolLogo')}>
            <img src={src ? src : '/images/sunflowerSchoolsLogo.webp'} alt="school Logo" className={cn('size-18', size && `size-${size}`, className)} onClick={handleOnClick} />
        </div>
    )
}

export default SchoolLogo

'use client';

import { Card, CardContent } from '@/components/ui/card';
import CustomCarousel from '@/customComponents/CustomCarousel';
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import { EmblaPluginType } from 'embla-carousel'

const registrationCards: React.ReactElement[] = [
    <div key="card-1" className="p-1">
        <Card>
            <CardContent className="flex aspect-square items-center justify-center p-">
                <span className="text-4xl font-semibold">{1}</span>
            </CardContent>
        </Card>
    </div>,
    <div key="card-2" className="p-1">
        <Card>
            <CardContent className="flex aspect-square items-center justify-center p-">
                <span className="text-4xl font-semibold">{2}</span>
            </CardContent>
        </Card>
    </div>
]

const RegistrationCarousels = () => {
    const plugins: EmblaPluginType[] = React.useMemo(() => [
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  ], [])

    return (
        <div className='regsistrationCarousels'>
            <CustomCarousel steps={registrationCards} options={{loop:true}} plugins={plugins}/>
        </div>
    )
}

export default RegistrationCarousels

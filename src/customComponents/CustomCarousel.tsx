'use client'

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { CreatePluginType, EmblaOptionsType,EmblaPluginType } from 'embla-carousel'
import { plugins } from "chart.js"


interface ICustomCarouselProp {
    options?: EmblaOptionsType,
    steps: (React.ComponentType<any> | React.ReactElement)[]
    plugins?: CreatePluginType<EmblaPluginType, {}>[] | undefined
}

export function CustomCarousel({ options, steps,plugins }: ICustomCarouselProp) {


    return (
        <div className="mx-auto max-w-[73%]">
            <Carousel className="w-full max-w-full" opts={options} plugins={plugins}>
                <CarouselContent className="py-2">
                    {steps?.map?.((item, index) => (
                        <CarouselItem key={index}>
                            {item &&
                                (typeof item === "function"
                                    ? React.createElement(item)
                                    : item)}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CustomCarousel

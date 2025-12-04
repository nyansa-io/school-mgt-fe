'use client';


import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { InputFormField } from "@/customComponents/FormFields";
import z from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import AppDivider from '@/customComponents/AppDivider';
import ButtonLoading from '@/customComponents/Button';


type TGradingSliderProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const GradingWardSlider = ({ onOpenChange, open }: TGradingSliderProps) => {

    const gradingSchema = z.object({

    });

    const gradingForm = useForm<z.infer<typeof gradingSchema>>({
        resolver: zodResolver(gradingSchema),
    });



    return (
        <Sheet modal={true} open={open} onOpenChange={onOpenChange}>
            <SheetContent className={cn("flex flex-col justify-between h-full min-w-screen md:min-w-sm transition-all",)}>
                <SheetHeader>
                    <SheetTitle>Ward Assessment</SheetTitle>
                    <SheetDescription>
                        Assess {'Flora Appiah'} on how she did on the exams
                    </SheetDescription>
                </SheetHeader>


                <Form {...gradingForm}>
                    <div className="wardDetailsContent flex flex-col flex-1 px-4 max-h-[80vh] overflow-y-auto overflow-x-hidden">
                        {/* user image */}
                        <div className="avatar size-18 overflow-hidden mx-auto shrink-0">
                            <Avatar className='w-full !h-full rounded-sm'>
                                <AvatarImage src="/images/sunflowerSchoolsLogo.webp" className='max-h-full object-cover aspect-auto' />
                                <AvatarFallback>{'Michael'.at?.(1)}{'Agyemang'?.at?.(1)}</AvatarFallback>
                            </Avatar>
                        </div>

                        {/* subjects container */}
                        <form action="" >
                            <div className="subjectsContainer mt-6 max-w-full">
                                {/* subjects */}
                                <div className="details bg-gray-50 p-2 space-y-4 pb-8 md:pb-10">
                                    <AppDivider text='Exams Subjects' position='center' textClassName='text-lg' />
                                    {/* subject */}
                                    <div className="subjectCard">
                                        <div className="wardInfo p-2 px-6 bg-white hover:shadow flex items-center gap-2">
                                            {/* subject name */}
                                            {/* score */}
                                            <InputFormField label='Mathematics' form={gradingForm} name='mathematics' />

                                            {/* total score */}
                                            <p className='shrink-0 mt-2'>
                                                /   100
                                            </p>
                                        </div>
                                    </div>

                                    {/* subject */}
                                    <div className="subjectCard">
                                        <div className="wardInfo p-2 px-6 bg-white hover:shadow flex items-center gap-2">
                                            {/* subject name */}
                                            {/* score */}
                                            <InputFormField label='English' form={gradingForm} name='english' />

                                            {/* total score */}
                                            <p className='shrink-0 mt-2'>
                                                /   100
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                    <SheetFooter>
                        <ButtonLoading title='Submit Grades' className='bg-blue-500 hover:bg-blue-600' />
                        <ButtonLoading title='Approve Grades' />
                        <SheetClose asChild>
                            <Button variant="outline">Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </Form>
            </SheetContent>
        </Sheet>
    )
}

export default GradingWardSlider

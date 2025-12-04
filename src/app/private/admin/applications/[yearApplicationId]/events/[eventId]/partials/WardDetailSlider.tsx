'use client';

import React from 'react';
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
import AppDivider from '@/customComponents/AppDivider';


type TWardDetailsSliderProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const WardDetailSlider = ({ onOpenChange, open }: TWardDetailsSliderProps) => {
    return (
        <Sheet modal={true} open={open} onOpenChange={onOpenChange}>
            <SheetContent className={cn("flex flex-col justify-between h-full min-w-screen md:min-w-sm transition-all",)}>
                <SheetHeader>
                    <SheetTitle>Ward Details</SheetTitle>
                    <SheetDescription>
                        Below are the details of an applicant ward.
                    </SheetDescription>
                </SheetHeader>


                <div className="wardDetailsContent flex flex-col flex-1 px-4 max-h-[80vh] overflow-y-auto">
                    {/* user image */}
                    <div className="avatar h-30 lg:h-50 overflow-hidden">
                        <Avatar className='w-full !h-full rounded-sm'>
                            <AvatarImage src="https://github.com/shadcn.png" className='max-h-full object-cover aspect-auto' />
                            <AvatarFallback className='h-full w-full'>{'Michael'.at?.(1)}{'Agyemang'?.at?.(1)}</AvatarFallback>
                        </Avatar>
                    </div>

                    {/* details */}
                    <div className="details mt-6 space-y-6 ">
                        {/* ward */}
                        <div className="ward">
                            <AppDivider text='Ward Info' position='center' />
                            <div className="wardInfo space-y-2">
                                {/* Full name  */}
                                <div className="fullName">
                                    <p className="label text-sm text-gray-500">Full Name</p>
                                    <p className="value font-semibold text-gray-500">{'Maxwell Kumah Abdullah'}</p>
                                </div>
                                {/* Date of birth  */}
                                <div className="fullName">
                                    <p className="label text-sm text-gray-500">Date of birth</p>
                                    <p className="value font-semibold text-gray-500">{'August 5 2004'}</p>
                                </div>
                                {/* Previous school  */}
                                <div className="fullName">
                                    <p className="label text-sm text-gray-500">Previous School</p>
                                    <p className="value font-semibold text-gray-500">{'St. Johns JHS'}</p>
                                </div>
                                {/* Medical Notes  */}
                                <div className="fullName">
                                    <p className="label text-sm text-gray-500">Medical Information</p>
                                    <p className="text-gray-600 bg-gray-50 p-1.5 text-sm">Has serious allergies and stuff.</p>
                                </div>
                            </div>
                        </div>
                        {/* guardian */}
                        <div className="guardian">
                            <AppDivider text='Guardian Info' position='center' />
                            <div className="wardInfo space-y-2">
                                {/* Full name  */}
                                <div className="fullName">
                                    <p className="label text-sm text-gray-500">Full Name</p>
                                    <p className="value font-semibold text-gray-500">{'Maxwell Kumah Abdullah'}</p>
                                </div>
                                {/* Phone number  */}
                                <div className="phoneNumber">
                                    <p className="label text-sm text-gray-500">Phone number</p>
                                    <p className="value font-semibold text-gray-500">{'054789093'}</p>
                                </div>
                                {/* Relationship */}
                                <div className="fullName">
                                    <p className="label text-sm text-gray-500">Relationship</p>
                                    <p className="value font-semibold text-gray-500">{'Father'}</p>
                                </div>
                                {/* Pace of residence  */}
                                <div className="fullName">
                                    <p className="label text-sm text-gray-500">Place of Residence</p>
                                    <p className="value font-semibold text-gray-500">{'Accra, Adenta'}</p>
                                </div>
                                {/* Relationship  */}
                                <div className="fullName">
                                    <p className="label text-sm text-gray-500">Previous School</p>
                                    <p className="value font-semibold text-gray-500">{'St. Johns JHS'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <SheetFooter>

                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default WardDetailSlider

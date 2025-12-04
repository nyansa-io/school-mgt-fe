'use client';

import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { cn } from '@/lib/utils';


interface IConfimationDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    header?: string;
    description?: React.ComponentType<'p'> | React.ReactElement | string;
    confirmText?: string;
    cancelText?: string;
    styling?: {
        cancelButton?: string;
        confirmButton?: string;
        header?: string;
        description?: string;
    }
}

const ConfirmationDialog = ({ onClose, onConfirm, open, cancelText, confirmText, description, header, styling }: IConfimationDialogProps) => {
    return (
        <AlertDialog open={open} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className={styling?.header}>{header}</AlertDialogTitle>
                    <div className={cn('text-gray-500 text-[15px]', styling?.description)} >
                        {typeof description === 'string' ? description : typeof description === "function"
                            ? React.createElement(description)
                            : description}
                        {/* {description} */}
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={styling?.cancelButton}>{cancelText ? cancelText : 'Cancel'}</AlertDialogCancel>
                    <AlertDialogAction className={styling?.confirmButton} onClick={onConfirm}>{confirmText ? confirmText : 'Continue'}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ConfirmationDialog

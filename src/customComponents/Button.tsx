import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import IconifyIcon from "./IconifyIcon"
import { cn } from "@/lib/utils";
import React from "react";


interface ButtonLoadingProps {
    title: string;
    outline?: boolean;
    disabled?: boolean;
    leftIcon?: string | React.ComponentType<any> | React.ReactElement;
    rightIcon?: string | React.ComponentType<any> | React.ReactElement;
    loading?: boolean;
    onClick?: () => void;
    className?: string;
    bgColor?: string,
    fontSize?: string | number;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null;
    type?: "reset" | "button" | "submit" | undefined
}


export default function ButtonLoading({
    title,
    leftIcon,
    rightIcon,
    loading = false,
    variant = 'default',
    outline,
    disabled,
    bgColor,
    onClick,
    className,
    fontSize = "1.375rem",
    type

}: ButtonLoadingProps) {
    return (
        <Button type={type} disabled={loading} className={cn('flex items-center justify-center gap-1', outline ? 'bg-transparent text-inherit border border-current hover:bg-accent-foreground/5' : '', variant == 'destructive' && 'text-red-500 border-red-500 hover:bg-red-500 hover:text-white', className)} onClick={onClick} style={{ backgroundColor: bgColor }} variant={variant || "default"}>
            {/* icon and loading */}
            {<div className={cn("iconOrLoading", (loading || leftIcon) ? 'block' : 'hidden')}>
                {/* loading */}
                <Loader2 className={cn("animate-spin", loading ? 'block' : 'hidden')} />
                {/* icon */}
                {leftIcon && <div className={cn("icon", loading ? 'hidden' : 'block')}>
                    {typeof leftIcon == 'string' ? <IconifyIcon icon={leftIcon} className="" /> : typeof leftIcon == 'function' ? React.createElement(leftIcon) : leftIcon}
                </div>}
            </div>}
            <p>
                {title}
            </p>

            {rightIcon && <div className={cn("rightIcon", loading ? 'hidden' : 'block')}>
                {/* <IconifyIcon icon={rightIcon} className="" /> */}
                {rightIcon && <div className={cn("icon", loading ? 'hidden' : 'block')}>
                    {typeof rightIcon == 'string' ? <IconifyIcon icon={rightIcon} className="" /> : typeof rightIcon == 'function' ? React.createElement(rightIcon) : rightIcon}
                </div>}
            </div>}
        </Button>
    )
}

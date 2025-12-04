"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ImageViewerProps {
  src: string;
  alt: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  className?: string;
  imageClassName?: string;
}

export function ImageViewer({
  src,
  alt,
  thumbnailWidth = 300,
  thumbnailHeight = 200,
  className = "",
  imageClassName = "",
}: ImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer overflow-hidden transition-all rounded-lg hover:scale-105 ${className}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(true);
          }
        }}
      >
        {/* <img
          src={src || "/placeholder.svg"}
          alt={alt}
          width={thumbnailWidth}
          height={thumbnailHeight}
          className="h-full w-full object-cover"
        /> */}
        <Avatar className={cn("w-full rounded-md h-full", imageClassName)}>
          <AvatarImage
            src={src || "/no-image.png"}
            className="max-h-full object-cover aspect-auto"
            height={thumbnailHeight}
            width={thumbnailWidth}
          />
          <AvatarFallback className="rounded-md">
            {"Maxwell".at?.(0)}
            {"Konadu".at?.(0)}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} - enlarged view`}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 z-10 rounded-full bg-background/80 hover:bg-background invert-90"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Full Size Image */}
            <img
              src={src || "/placeholder.svg"}
              alt={alt}
              className="h-auto w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}

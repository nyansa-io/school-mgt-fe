"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

interface OtpResendTimerProps {
  /** Duration in seconds before resend is allowed (default: 30) */
  duration?: number
  /** Callback function when resend is clicked */
  onResend: () => void
  /** Custom text for the resend button (default: "Resend OTP") */
  resendText?: string
  /** Custom text shown during countdown (default: "Resend in {time}") */
  countdownText?: (formattedTime: string) => string
  /** Whether to start the timer immediately (default: true) */
  autoStart?: boolean
  /** Custom styling classes */
  className?: string
}

export function OtpResendTimer({
  duration = 30,
  onResend,
  resendText = "Resend OTP",
  countdownText = (formattedTime: string) => `Resend in ${formattedTime}`,
  autoStart = true,
  className = "",
}: OtpResendTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isActive, setIsActive] = useState(autoStart)
  const [canResend, setCanResend] = useState(!autoStart)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Helper function to format time
  const formatTime = (seconds: number): string => {
    if (seconds <= 0) return "0s"
    
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    
    if (hours > 0) {
      // Format: "1h 30m 45s" or "1h 0m 45s" or "1h 30m 0s"
      return `${hours}h ${minutes}m ${remainingSeconds}s`
    } else if (minutes > 0) {
      // Format: "30m 45s" or "30m 0s"
      return `${minutes}m ${remainingSeconds}s`
    } else {
      // Format: "45s"
      return `${remainingSeconds}s`
    }
  }

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsActive(false)
            setCanResend(true)
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isActive, timeLeft])

  const handleResend = () => {
    onResend()
    setTimeLeft(duration)
    setIsActive(true)
    setCanResend(false)
  }

  const resetTimer = () => {
    setTimeLeft(duration)
    setIsActive(true)
    setCanResend(false)
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {canResend ? (
        <Button
          onClick={handleResend}
          variant="outline"
          size="sm"
          className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          {resendText}
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 24 24">
              {/* Background circle */}
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-border opacity-30"
              />
              {/* Progress circle */}
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 10}`}
                strokeDashoffset={`${2 * Math.PI * 10 * (1 - (duration - timeLeft) / duration)}`}
                strokeLinecap="round"
                className="text-primary transition-all duration-1000 ease-linear"
              />
            </svg>
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            {countdownText(formatTime(timeLeft))}
          </span>
        </div>
      )}
    </div>
  )
}
'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  asChild?: boolean
  href?: string
}

export default function ShinyButton({
  className,
  children = 'Get Started',
  href,
  ...props
}: ShinyButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center h-11 w-max rounded-xl border-none bg-[linear-gradient(325deg,#0044ff_0%,#2ccfff_55%,#0044ff_90%)] bg-[length:280%_auto] px-7 py-2 text-sm font-medium text-white shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)] transition-[background] duration-700 hover:bg-[position:top_right] focus:ring-blue-400 focus:ring-offset-1 focus:outline-none focus-visible:ring-2',
    className
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}

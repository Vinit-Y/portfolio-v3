'use client'

import React from 'react'

export const MagicButton = ({title, icon, handleClick} : {title: string, icon: React.ReactNode, handleClick?: () => void, otherClasses?: string}) => {
  return (
    <button 
      onClick={() => {
        if (handleClick) handleClick();
        window.open(`https://docs.google.com/viewer?url=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL + '/assets/resumes/resume.pdf')}&embedded=true`, '_blank', 'noopener,noreferrer');
      }}
      className="text-white inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer"
      type="button"
    >
      <span className="text-base font-semibold">{title}</span>
      <span className="ml-2 text-xl">{icon}</span>
    </button>
  )
}

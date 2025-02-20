"use client";
import React from 'react'

export const MagicButton = ({title, icon, handleClick, position, otherClasses} : {
  title: string, 
  icon: React.ReactNode, 
  handleClick?: () => void, 
  position?: 'left' | 'right', 
  otherClasses?: string
}) => {
  return (
    <button 
      type="button"
      className={`text-white inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer ${otherClasses || ''}`}
      onClick={handleClick}
    >
      {position === 'left' && icon && <span className="mr-2 text-xl">{icon}</span>}
      <span className="text-base font-semibold">{title}</span>
      {(!position || position === 'right') && icon && <span className="ml-2 text-xl">{icon}</span>}
    </button>
  )
}

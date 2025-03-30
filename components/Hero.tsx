"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MagicButton } from './ui/MagicButton'
import { PiReadCvLogoBold } from 'react-icons/pi'
import { IoPersonCircleOutline } from 'react-icons/io5';

const Hero = () => {

  const handleResumeClick = () => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const pdfUrl = `${siteUrl}/public/assets/resumes/resume.pdf`;
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
    window.open(viewerUrl, '_blank', 'noopener,noreferrer');
  }
  
  return (
    <div className="pb-20 pt-20">

      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w[50vw]" fill="blue"/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-lg text-center text-blue-100">Full-Stack Developer | Software Engineer | AI Enthusiast</h2>
          <img src="/assets/vinit.png" alt="Image of Vinit Yadav" className='rounded-full'/>
          <TextGenerateEffect className="text-center text-[36px] md:text-4xl lg:text-5xl xl:text-6xl font-bold" words="Hi👋, I&apos;m  Vinit Yadav" duration={1.5} filter={true}/>
          <p className="text-center md:tracking-wider m-5 text-sm md:text-lg lg:text-xl xl:text-2xl">Welcome! Whether you&apos;re here to get inspired ✨, collaborate 🤝, or just explore 🔍, I hope you find something valuable. Feel free to browse my work 💻, check out my projects 🚀, and reach out—let&apos;s connect! 📩</p>
            <div className="flex space-x-4">
              <a>
              <MagicButton 
                title="View Resume" 
                icon={<PiReadCvLogoBold />}
                handleClick={handleResumeClick}
              />
              </a>
              <a href="#about" className="hidden md:inline">
              <MagicButton 
                title="About Me" 
                icon={<IoPersonCircleOutline />}
              />
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
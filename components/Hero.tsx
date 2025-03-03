"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MagicButton } from './ui/MagicButton'
import { PiReadCvLogoBold } from 'react-icons/pi'

const Hero = () => {

  const handleResumeClick = () => {
    window.open(`https://docs.google.com/viewer?url=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL + '/assets/resumes/resume.pdf')}&embedded=true`, '_blank', 'noopener,noreferrer');
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
          <TextGenerateEffect className="text-center text-[20px] md:text-5xl lg:text-6xl xl:text-7xl font-bold" words="Focused on Building Dynamic and Scalable Applications that Deliver High Performance" duration={1.5} filter={true}/>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl xl:text-3xl">Hi👋, I&apos;m Vinit, Thanks for checking out my portfolio! I’m Vinit, a Full Stack Developer currently pursuing my Master’s in Information Systems at Northeastern University (graduating May 2025). I hold a Bachelor’s in Computer Engineering from the University of Mumbai.</p>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl xl:text-3xl">My experiences have equipped me with the skills and mindset to tackle challenges head-on and deliver impactful results. Whether it’s architecting cloud solutions, enhancing application performance, or creating seamless user interfaces, I’m passionate about using technology to drive meaningful outcomes.</p>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl xl:text-3xl">Feel free to reach out via this form or email me at <a href="mailto:vinit.k.patil@northeastern.edu" className="text-blue-500 hover:text-blue-600">vinit.k.patil@northeastern.edu</a>.</p>

          <a>
            <MagicButton 
              title="View Resume" 
              icon={<PiReadCvLogoBold/>}
              handleClick={handleResumeClick}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
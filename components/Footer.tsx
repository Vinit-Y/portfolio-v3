import React from 'react'
import { socialMedia } from '@/data/index'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer 
      className="relative w-full py-16 flex flex-col items-center justify-center text-white bg-black-100 overflow-hidden" 
      id="contact"
      style={{
        backgroundImage: "url('/footer-grid.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="absolute inset-0"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-2xl font-bold">
          Let&apos;s bring your <span className="text-blue-500">ideas to life</span>
        </h1>
        <p className="text-sm text-gray-400 mt-4 max-w-2xl mx-auto">
          Need help building something scalable, user-friendly, and performance-driven? 
          I&apos;d love to support your project or team with clean code and thoughtful solutions.
        </p>
        <a href="mailto:yadav.vini@northeastern.edu">
          <MagicButton
            title="Get in Touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="mt-6"
          />
        </a>
      </div>

      <div className="relative z-10 mt-12 text-center">
        <div className="flex space-x-6 justify-center">
          {socialMedia.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <platform.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Vinit Yadav.
        </p>
      </div>
    </footer>
  )
}

export default Footer

import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className="py-16" id="workExperience">
      <h1 className="heading text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
        My <span className="text-blue-500">Work Experience</span>
      </h1>
      <div className="w-full mt-10 grid grid-cols-1 gap-8">
        {workExperience.map((experience) => (
          <Button 
            key={experience.id} 
            duration={Math.floor(Math.random() * 8000) + 10000}
            borderRadius='1.5rem'
            className="flex-1 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#13162d] text-gray-900 dark:text-gray-100"
            style={{
              background: 'rgb(2,0,36)',
              backgroundColor: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(55,55,189,1) 56%, rgba(0,212,255,1) 100%)',
              transition: 'background-color 0.3s ease',
            }}>
            <div className="p-4">
              {/* First Row: Image, Position, Company, Date, Location */}
              <div className="flex flex-row items-center gap-4">
                <img src={experience.thumbnail} alt={experience.company} className="lg:w-28 md:w-20 w-16 rounded-md shadow-md" />
                <div className="text-center flex-1">
                  <h1 className='font-bold lg:text-2xl md:text-xl text-base text-blue-600 dark:text-blue-400'>
                    {experience.position}
                  </h1>
                  <p className='lg:text-lg md:text-sm text-xs font-medium '>
                    {experience.company}
                  </p>
                  <p className='lg:text-sm md:text-xs text-xs font-light text-gray-600 dark:text-gray-400'>
                    {experience.date} | {experience.location}
                  </p>
                </div>
              </div>
              {/* Second Row: Description */}
              <div className="mt-3 text-left">
                <p className="text-sm lg:text-base text-gray-800 dark:text-gray-200">
                  {experience.description}
                </p>
              </div>
              {/* Award Image */}
              {experience.image && (
                <div className="mt-4 flex justify-center">
                  <img 
                    src={experience.image} 
                    alt="Award" 
                    className="w-60 h-auto rounded-md shadow-lg"
                  />
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience

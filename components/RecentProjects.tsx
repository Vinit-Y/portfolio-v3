import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaGithub } from 'react-icons/fa'

export const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of {''}
        <span className="text-blue-500">
          Recent Projects
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
            <PinContainer title="Visit" href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg: rounded-3xl bg-[#13162d]'>
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img 
                  src={img}
                  alt={title}
                  className="absolute bottom-0 z-10" 
                />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-xl font-normal text-sm line-clamp-2'>
                {des}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div 
                      key={icon} 
                      className='relative group border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                      style={{transform: `translateX(-${5 * index * 2}px)`}}
                    >
                      <img src={icon} alt="icon" className='p-1.5' />
                      <span className="absolute bottom-full mb-1 hidden text-xs bg-black text-white px-2 py-1 rounded opacity-75 group-hover:block">
                        {(icon?.split('/').pop()?.split('.')[0]) ?? ''}
                      </span>
                    </div>
                  ))}
                </div>
                <div className='flex items-center justify-center rounded-full p-2 bg-[#4493f8]'>
                  <p className='flex lg:text-xl md:text-xs'>
                    View Code
                  </p>
                  <FaGithub className='ms-2' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

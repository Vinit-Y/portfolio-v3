import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { education, skills } from '@/data'

const Education = () => {
  return (
    <div className="py-20" id="education">
      <h1 className="heading">
        Education
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards 
          items={education}
          direction= "right"
          speed= "slow"
        />
        <div>
          {skills.map(({name, img}) => (
            <div key={name} className="flex items-center justify-center">
              {img && <img src={img} alt={name} className="w-10 h-10 mr-2" />}
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education

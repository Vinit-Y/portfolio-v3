import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { education } from '@/data'

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
      </div>
    </div>
  )
}

export default Education

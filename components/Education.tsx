import { education } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import React from 'react'

const Education = () => {
  return (
    <div className="py-20" id="education">
      <h1 className="heading">
        Education
      </h1>
      <div className="flex flex-col items-center">
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

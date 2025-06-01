import React from 'react'
import { counterItems } from '../constants/index.js'
import { div } from 'three/tsl'

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-4-cols'>
            {counterItems.map((item) => (
              <div className='bg-white-50 rounded-lg p-10 flex-col justify-center'>
              <div key={counterItems.label} className='counter-item text-black-100 text-4xl font-bold mb-2'>
                {item.value} {item.suffix}
              </div>
              <div className='text-black-200 text-lg'>{item.label}</div>
              </div>
            ))}
        </div>

    </div>
  )
}

export default AnimatedCounter
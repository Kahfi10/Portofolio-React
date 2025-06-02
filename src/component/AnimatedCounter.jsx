import React from 'react'
import { counterItems } from '../constants/index.js'
import CountUp from 'react-countup'


const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-4-cols'>
            {counterItems.map((item) => (
              <div className='bg-black-50 rounded-lg p-10 flex-col justify-center'>
              <div key={counterItems.label} className='counter-item text- text-4xl font-bold mb-2'>
                <CountUp suffix={item.suffix} end={item.value} />
              </div>
              <div className='text-grey-700'>{item.label}</div>
              </div>
            ))}
        </div>

    </div>
  )
}

export default AnimatedCounter
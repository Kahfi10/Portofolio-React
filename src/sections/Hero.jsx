import React from 'react'
import { words} from '../constants/index.js'

const Hero = () => {
  return (
    <section id="hero" className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>


        <div className='hero-layout'>
            {/* Hero content goes here */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>Shaping
                            <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2' >
                                                <img
                                                 src={word.imgPath} 
                                                 alt={word.text}
                                                 className='xl:size-12 md:size-12 size-7 md:p-2 p-1 rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-50 ease-in-out shadow-lg'
                                                 />

                                                 <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                            </span>
                        </h1>
                        <h1>Into Real Project</h1>
                    </div>
                         <p className='text-black-200 md:text-2xl relative z-10 pointerevents-none'>
                           Hi, I'm Kahfi, a passionate web developer
                        </p>
                </div>
            </header>
            {/* Hero 3d*/}
        </div>
    </section>
  )
}

export default Hero
import React from 'react'
import { words} from '../constants/index.js'
import Button from '../component/Button.jsx'
import HeroExperience from '../component/HeroModels/HeroExperience.jsx'

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
                                                 className='xl:size-12 md:size-12 size-7 md:p-2 p-1 rounded-full bg-black-100 transition-all duration-50 ease-in-out shadow-lg'
                                                 />

                                                 <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                            </span>
                        </h1>
                        <h1>Into Real Project</h1>
                    </div>
                         <p className='text-black-200 md:text-xl font-medium  relative z-10 pointer-events-none'>
                           Hi, I'm Kahfi, a passionate web developer
                        </p>
                        <Button
                        className=" md:w-80 md:h-16 w-60 h-12" 
                        id="button"
                        text="See My Work"
                        />
                </div>
            </header>
            {/* Hero 3d*/}
            <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience />
                </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero
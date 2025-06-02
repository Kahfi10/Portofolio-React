import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT SIDE */}
                <div className="first-project-wrapper">
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className="text-content">
                        <h2>On-Demand Rides Made Simple with a Powerful, Your-Life will Be Easy</h2>
                        <p className="text-grey-700 md:text-xl">
                            An innovative ride-hailing app that connects passengers with drivers in real-time, offering a seamless and efficient transportation experience. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection
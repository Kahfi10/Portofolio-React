import TitleHeader from '../component/TitleHeader'
import { expCards } from '../constants'
import GlowCards from '../component/GlowCards'

const ExperienceSection = () => {
  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader title='Professional Work Experience' sub='My Career Overview' />

            <div className="mt-32 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {expCards.map((card, index) => (
                        <div key={card.title} className='exp-card-wrapper'>
                            <div className='xl:w-2/6'>
                                <GlowCards card={card} index={index}>
                                    <div>
                                        <img src={card.imgPath} alt={card.title} />
                                    </div>
                                </GlowCards>
                            </div>
                            <div className="xl:w-4/6">
                                <div className="flex items-start">
                                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                        <div>
                                            <h1 className="font-semibold text-3xl">{card.title}</h1>
                                            <p className="my-5 text-gray-800">
                                                🗓️&nbsp;{card.date}
                                            </p>
                                            <p className="text-gray-900 italic">
                                                Responsibilities
                                            </p>
                                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-gray-800">
                                                {card.responsibilities.map(
                                                    (responsibility, idx) => (
                                                        <li key={idx} className="text-lg">
                                                            {responsibility}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}

export default ExperienceSection
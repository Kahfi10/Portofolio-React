import React from 'react'

const Button = ({ text, className, id}) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`}>
        <div className='cta-button group'>
            <div className='bg-circle' />
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
            <img className='arrow' src="/images/down-arrow.png" alt="arrow" />
        </div> 
        </div>
    </a>
  )
}

export default Button

import React, { useRef } from 'react';

const GlowCards = ({ card = {}, children, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    // Get the mouse position relative to the card
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle of the mouse position
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360; // Normalize angle to be between 0 and 360

    cardRef.current.style.setProperty('--start', angle + 60);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className='card card-border timeline-card rounded-xl p-10'
    >
      <div className="glow" />
      <div className='flex items-center gap-1 mb-5'>
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" alt="star" className='star-img size-5' key={i} />
        ))}
      </div>
      <div className='mb-5'>
        <p className='text-grey-700 text-lg'>{card?.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCards;
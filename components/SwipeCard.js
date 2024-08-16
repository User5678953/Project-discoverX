import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './SwipeCard.css';

const SwipeCard = ({ image, title, description, onSwipe }) => {
  const [flipped, setFlipped] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Swipe Left Detected');
      onSwipe('left');
    },
    onSwipedRight: () => {
      console.log('Swipe Right Detected');
      onSwipe('right');
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleTap = () => {
    setFlipped(!flipped);
    console.log(`Card ${flipped ? 'flipped back' : 'flipped'} to show ${flipped ? 'front' : 'back'} side`);
  };

  return (
    <div className={`swipe-card ${flipped ? 'flipped' : ''}`} {...handlers} onClick={handleTap}>
      <div className="swipe-card-inner">
        <div className="swipe-card-front">
          <img src={image} alt={title} />
          <div className="swipe-card-content">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="swipe-card-back">
          <p>{description}</p>
        </div>
      </div>
      {/* Removed swipe-indicator */}
    </div>
  );
};

export default SwipeCard;

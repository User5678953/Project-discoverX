import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './SwipeCard.css';

const SwipeCard = ({ image, title, description, onSwipe }) => {
  const [flipped, setFlipped] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [showIcon, setShowIcon] = useState(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Swipe Left Detected');
      setSwipeDirection('left');
      setShowIcon('dislike');
      setTimeout(() => setShowIcon(null), 300); // Hide icon after animation
      onSwipe('left');
    },
    onSwipedRight: () => {
      console.log('Swipe Right Detected');
      setSwipeDirection('right');
      setShowIcon('heart');
      setTimeout(() => setShowIcon(null), 300); // Hide icon after animation
      onSwipe('right');
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleTap = () => {
    setFlipped(!flipped);
    console.log(`Card ${flipped ? 'flipped back' : 'flipped'} to show ${flipped ? 'front' : 'back'} side`);
  };

  useEffect(() => {
    if (swipeDirection) {
      const timer = setTimeout(() => {
        setSwipeDirection(null); // Reset swipe direction
      }, 500); // Match the animation duration
      return () => clearTimeout(timer);
    }
  }, [swipeDirection]);

  return (
    <>
      <div
        className={`swipe-card ${flipped ? 'flipped' : ''} ${swipeDirection ? `swiped-${swipeDirection}` : ''}`}
        {...handlers}
        onClick={handleTap}
      >
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
      </div>
      {showIcon && (
        <div className={`swipe-card-icon show ${showIcon}`}>
          {showIcon === 'heart' ? '❤️' : '👎'}
        </div>
      )}
    </>
  );
};

export default SwipeCard;

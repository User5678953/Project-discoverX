

// Function to validate card data
export const validateCardData = (data) => {
    return data.map(card => ({
      image: card.image || 'https://via.placeholder.com/400',
      title: card.title || 'No title available',
      description: card.description || 'No description available',
    }));
  };
  
  // Function to handle swipe actions
  export const handleSwipe = (direction) => {
    console.log(`Swipe action triggered: ${direction}`);
  };
  
  // Function to handle scroll events
  export const handleScroll = (event) => {
    console.log('Scroll event detected');
    console.log('Scroll position:', event.currentTarget.scrollTop);
  };

  
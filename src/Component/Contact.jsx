import React from 'react'
import '../Styles/ContactStyle.css'
import { useSwipeable } from 'react-swipeable';

function Contact() {
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
  });

  const handleSwipe = (direction) => {
    const cards = document.querySelector('.cards');
    if (direction === 'left') {
      cards.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    } else {
      cards.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-component" id='contact'>
      <h2>Contact Information</h2>
      <div className="cards" {...handlers}>
        <div className="card permanent-address">
          <h3>Address I</h3>
          <p>Bandhmura, Katwa</p>
          <p>Purba Bardhaman, Westbengal-713150</p>
        </div>
        <div className="card official-address">
          <h3>Address II</h3>
          <p>Hatiara, New Town</p>
          <p>Kolkata- 700157</p>
        </div>
      </div>
    </div>
  );
}

export default Contact


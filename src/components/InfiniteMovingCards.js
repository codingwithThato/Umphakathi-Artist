// InfiniteMovingCards.js
import React from 'react';
import './InfiniteMovingCards.css'; // Assuming you have some CSS for styling

const InfiniteMovingCards = ({ images }) => {
  return (
    <div className="infinite-moving-cards">
      <div className="cards-wrapper">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image} alt={`Card ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;

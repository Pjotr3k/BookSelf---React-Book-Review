import React from 'react';
import BookCard from './BookCard';

function Display({ cards }) {
    const BookCards = cards

    const CardItems = BookCards.map((card) =>
        <BookCard key={card.Id} title={card.Title} author={card.Author} rating={card.Rating} />
    );

  return (
      <div>{CardItems}</div>
  );
}

export default Display;
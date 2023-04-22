import React from 'react';
import BookCard from './BookCard';

function Display({ cards, onCardAction }) {
    const BookCards = cards

    const CardItems = BookCards.map((card) =>
        <BookCard key={card.Id} id={card.Id} onCardAction={onCardAction} title={card.Title} author={card.Author} rating={card.Rating} />
    );

  return (
      <div>{CardItems}</div>
  );
}

export default Display;
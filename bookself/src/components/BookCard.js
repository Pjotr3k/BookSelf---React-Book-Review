import React from 'react';

function BookCard({ key, title, author, rating }) {
  return (
      <div key = {key}>
          <ul>
              <li>{title}</li>
              <li>{author}</li>
              <li>{rating}</li>
              <li>blabla</li>
          </ul>
      </div>
  );
}

export default BookCard;
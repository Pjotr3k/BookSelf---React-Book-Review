import React from 'react';
import { useState } from 'react'
import ConfirmPopUp from './ConfirmPopUp';

function BookCard({ key, id, title, author, rating, onCardAction }) {   

    

    const handleButtonClick = (event) => {
        onCardAction(id , event.target.value);
    }

  return (
      <div key = {id}>
          <ul>
              <li>{title}</li>
              <li>{author}</li>
              <li>{rating}</li>              
          </ul>
          <button>Edit</button> <button onClick={handleButtonClick} value='delete'>Delete</button>          

      </div>
  );
}

export default BookCard;
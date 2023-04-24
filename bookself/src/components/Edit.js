import React from 'react';
import { useState } from 'react';

function Edit({id, onSubmit, error, onCancel }) {

    const [isEdit, setEdit] = useState(id === '' ? false : true)
    const [fields, changeFields] = useState({ id: id, title: '', author: '', rating: 5 });

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(fields.id, fields.title, fields.author, fields.rating, isEdit);
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case ('id'): changeFields({ id: event.target.value, title: fields.title, author: fields.author, rating: fields.rating }); break;
            case ('title'): changeFields({ id: fields.id, title: event.target.value, author: fields.author, rating: fields.rating }); break;
            case ('author'): changeFields({ id: fields.id, title: fields.title, author: event.target.value, rating: fields.rating }); break;
            case ('rating'): changeFields({ id: fields.id, title: fields.title, author: fields.author, rating: event.target.value }); break;
        }
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <h5>Enter new book</h5>
            <span>{error}</span>
            <label>id</label><input disabled={isEdit} onChange={handleChange} value={fields.id} name='id'></input> 
            <label>title</label><input onChange={handleChange} value={fields.title} name='title'></input>
            <label>author</label><input onChange={handleChange} value={fields.author} name='author'></input>
            <label>rating</label><input type='range' min={1} max={10} onChange={handleChange} value={fields.rating} name='rating'></input>
            <button type="submit">Submit</button>
            <button onClick={() => onCancel() }>Cancel</button>
            
            </form>
        </div>
  );
}

export default Edit;
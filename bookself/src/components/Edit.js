import React from 'react';
import { useState } from 'react';

function Edit({id, onSubmit, error, onCancel, book }) {
    
    const [isEdit, setEdit] = useState(id === '' ? false : true)
    const [fields, changeFields] = useState(book(id));
    //const [fields, changeFields] = useState({ Id: id, Title: '', Author: '', Rating: 5 });
    

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(fields.Id, fields.Title, fields.Author, fields.Rating, isEdit);
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case ('Id'): changeFields({ Id: event.target.value, Title: fields.Title, Author: fields.Author, Rating: fields.Rating }); break;
            case ('Title'): changeFields({ Id: fields.Id, Title: event.target.value, Author: fields.Author, Rating: fields.Rating }); break;
            case ('Author'): changeFields({ Id: fields.Id, Title: fields.Title, Author: event.target.value, Rating: fields.Rating }); break;
            case ('Rating'): changeFields({ Id: fields.Id, Title: fields.Title, Author: fields.Author, Rating: event.target.value }); break;
        }
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <h5>Enter new book</h5>
            <span>{error}</span>
            <label>id</label><input disabled={isEdit} onChange={handleChange} value={fields.Id} name='Id'></input> 
            <label>title</label><input onChange={handleChange} value={fields.Title} name='Title'></input>
            <label>author</label><input onChange={handleChange} value={fields.Author} name='Author'></input>
            <label>rating</label><input type='range' min={1} max={10} onChange={handleChange} value={fields.Rating} name='Rating'></input>
            <button type="submit">Submit</button>
            <button onClick={() => onCancel() }>Cancel</button>
            
            </form>
        </div>
  );
}

export default Edit;
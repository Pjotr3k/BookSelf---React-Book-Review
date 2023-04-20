import { useState } from 'react';
import BookCard from './components/BookCard';
import Display from "./components/Display";
import Edit from "./components/Edit";

function App() {



    const [BookCards, modBookCards] = useState([
        { Id: 0, Title: 'Harry Potter', Author: 'JK Rowling', Rating: 0 }
    ]);

    const handleAddBook = (id, title, author, rating) => {
        modBookCards([...BookCards, {
            Id: id , Title: title, Author: author, Rating: rating 
        }])
    };

        return <div>
            <Display cards={BookCards} />
            <Edit onSubmit={handleAddBook} />
        </div>;
    
}

export default App;
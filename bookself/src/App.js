import { useState } from 'react';
import BookCard from './components/BookCard';
import ConfirmPopUp from './components/ConfirmPopUp';
import Display from "./components/Display";
import Edit from "./components/Edit";
import "./Style.css"

function App() {


    const [Popup, setPopup] = useState({ Visible: false, Id: '', Communicate: '', Action: () => { } });
    const [BookCards, modBookCards] = useState([
        { Id: '0', Title: 'Harry Potter', Author: 'JK Rowling', Rating: 0 }
    ]);
    const [ErrorEdit, changeErrorEdit] = useState('');

    const handleAddBook = (id, title, author, rating) => {
        var er = false;
        for (var i = 0; i < BookCards.length && er == false; i++) {
            if (id == BookCards[i].Id) {
                changeErrorEdit('The id of the book should be unique');
                er = true;
            }
        }
            if (er === false) {
                changeErrorEdit('');
                modBookCards([...BookCards, {
                    Id: id, Title: title, Author: author, Rating: rating
                }]);
            }
    }

    const toggleVisibility = () => {
        setPopup({ Visible: false, Id: Popup.Id, Communicate: Popup.Communicate, Action: Popup.Action });
    }

    const handleDeleteBook = (id) => {
        modBookCards(BookCards.filter(book => book.Id != id));
        toggleVisibility();
    }
    //id, action
    const handleCardAction = (id, action) => {
        if(action === 'delete')
            setPopup({ Visible: true, Id: id, Communicate: 'Are you sure you want to remove this book?', Action: handleDeleteBook });
        
    }   
    

    return <div>
        {Popup.Visible ? <ConfirmPopUp onConfirm={Popup.Action} communicate={Popup.Communicate} id={Popup.Id} /> : ''}
        <button onClick={handleCardAction}>Avada Kedavra</button>
        <Display onCardAction={handleCardAction} cards={BookCards} />
            <Edit onSubmit={handleAddBook} error={ErrorEdit} />
        </div>;
    
}

export default App;
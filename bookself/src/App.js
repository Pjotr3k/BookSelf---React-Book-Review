import { useCallback, useState } from 'react';
import BookCard from './components/BookCard';
import ConfirmPopUp from './components/ConfirmPopUp';
import Display from "./components/Display";
import Edit from "./components/Edit";
import "./Style.css"

function App() {


    const [Popup, setPopup] = useState({ Visible: false, Id: '', Communicate: '', Action: () => { } });
    const [dataEdit, setDataEdit] = useState({ Id: '', Visible: false, Error: '' });
    const [BookCards, modBookCards] = useState([
        { Id: '0', Title: 'Harry Potter', Author: 'JK Rowling', Rating: 0 }
    ]);
    
    

    const closeEdit = () => {
        setDataEdit({ Id: '', Visible: false, Error: '' });
    }

    const handleAddBook = (id, title, author, rating) => {
        var er = false;
        for (var i = 0; i < BookCards.length && er == false; i++) {
            if (id == BookCards[i].Id) {
                setDataEdit({ Id: dataEdit.Id, Visible: dataEdit.Visible, Error: 'The id of the book should be unique'});
                er = true;
            }
        }
            if (er === false) {                
                modBookCards([...BookCards, {
                    Id: id, Title: title, Author: author, Rating: rating
                }]);
                closeEdit();
            }
    }

    

    const handleEditBook = (id, title, author, rating) => {
        var er = false;

        modBookCards(BookCards.map(el => el.Id === id ? { Id: id, Title: title, Author: author, Rating: rating } : el));

        
        closeEdit();

    }

    const handleEditField = (id, title, author, rating, isEdit) => {
        if (isEdit) handleEditBook(id, title, author, rating);
        else handleAddBook(id, title, author, rating);
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
        if (action === 'edit')
            setDataEdit({ Id: id, Visible: true, Error: dataEdit.Error })
        
    }   
    

    return <div>
        {Popup.Visible ? <ConfirmPopUp onConfirm={Popup.Action} communicate={Popup.Communicate} id={Popup.Id} /> : ''}        
        <Display onCardAction={handleCardAction} cards={BookCards} />
        <button onClick={() => setDataEdit({ Id: '', Visible: true, Error: '' })}>Add New Book</button>
        {dataEdit.Visible ? <Edit id={dataEdit.Id} onCancel={closeEdit} onSubmit={handleEditField} error={dataEdit.Error} /> : ''}
        </div>;
    
}

export default App;
import React, {useReducer,useState} from 'react'
import {v4 as uuidv4} from "uuid";
import { reducer } from './reducer';


const booksData = [
    { id: 1, name: "Pather Panchal" },
    { id: 2, name: "Padma Nadir Majhi" },
    { id: 3, name: "  Srikanta" },
];

const initialState = {
    books : booksData
}

function UseReducer() {

   const [bookState, dispatch] = useReducer(reducer,initialState); 
   const [bookName, setBookName] = useState("");

   const handleChange = (e) => {
     setBookName(e.target.value);
   }

   const handleSubmit = (e) => {
     e.preventDefault();
     const newBook = {id:uuidv4(),name:bookName};
     dispatch({
        type: "ADD",
        payload : newBook
     });
     setBookName("");
   }

   const removeBook = (id) => {
        dispatch({type:"REMOVE",payload:id});
   }

  return (
    <div>
        <h3>Book list</h3>
        <form onSubmit={handleSubmit}>
            <input type='text' value={bookName} onChange={handleChange}/>
            <button type='submit' disabled={bookName ? false : true}>Add book</button>
        </form>
        <ul>
            {
                bookState.books.map((book) => {
                   return <li key={book.id}>{book.name} <button onClick={() => removeBook(book.id)}>Remove</button></li>
                })
            }
        </ul>
    </div>
  )
}

export default UseReducer

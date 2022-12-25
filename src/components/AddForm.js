import React, { useContext, useState, useEffect } from "react";
import { bookContext } from "../context/bookContext";

const AddForm = () => {

  const { dispatch } = useContext(bookContext);
  const [ name, setName ] = useState('');
  const [ author, setAuthor ] = useState('');

  return ( 
    <form className="addForm" onSubmit={(e) => {
      e.preventDefault();
      dispatch({ type: "ADD_BOOKS", book:{ 
        title: name,
        author: author
        }});
      setName('');
      setAuthor('');
    }}>
      <h2 className="add-title">Add Books Here!</h2>
      <div className="form">
        <label>Book Name:</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Author:</label>
        <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}></input>
      </div>
      <button>Add Book</button>
    </form>
  );
}
 
export default AddForm;
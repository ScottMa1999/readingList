import React, { useContext} from "react";
import { bookContext } from "../context/bookContext";

const BookList = () => {

  const { book, dispatch } = useContext(bookContext);

  return (  
    <div className="BookList">
      {
        book.map( (book) => {
          return (
            <div className="list" key={book.id} onClick={() => dispatch({ type:"DELETE_BOOKS", book:{ id:book.id } })}>
              <h2>{book.title}</h2>
              <h4>-- {book.author}</h4>
            </div>
          )
        })
      }
    </div>
  );
}
 
export default BookList;
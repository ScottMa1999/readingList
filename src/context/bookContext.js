import React, { createContext, useReducer, useEffect } from "react";
import { bookRducer } from "../Reducer/bookReducer";

export const bookContext = createContext();

const BookContextProvider = (props) => {

  const [ book, dispatch ] = useReducer(bookRducer,[], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : []
  });
 
  useEffect(() => {
     localStorage.setItem("books",JSON.stringify(book))
  },[book])

  return (  
    <bookContext.Provider value={{book, dispatch}}>
      {props.children}
    </bookContext.Provider>
  );
}
 
export default BookContextProvider;
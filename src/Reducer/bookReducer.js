import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

export const bookRducer = (state, action) => {
  switch(action.type) {
    case "ADD_BOOKS":
      return [...state, {
        title: action.book.title,
        author: action.book.author,
        id: uuid()
      }];
    case "DELETE_BOOKS":
      return state.filter( book => book.id != action.book.id );
    default: 
      return state
  }
}
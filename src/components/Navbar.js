import React, { useState, useContext } from 'react';
import { bookContext } from '../context/bookContext';

const Navbar = () => {

  const { book } = useContext(bookContext);

  return ( 
    <div className='nav'>
      <h1>Scott Reading List</h1>
      <h2>{ book.length }</h2>
    </div>
  );
}
 
export default Navbar;

import React, { createContext, useReducer } from "react";
import { ageReducer } from "../Reducer/ageReducer";

export const ageContext = createContext();

const ageContextProvider = (props) => {

  const [age, dispatch] = useReducer(ageReducer, 0);

  return(
    <ageContext.Provider value={{age, dispatch}}>
      {props.children}
    </ageContext.Provider> 
  );
}

export default ageContextProvider;
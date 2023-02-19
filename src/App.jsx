import React, { createContext, useEffect, useState } from 'react'
import MyRouter from './router/MyRouter'
//Lord-Icon
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
//
export const ContextData = createContext();


export default function App() {

const [user , SetUser] = useState(null);
const [loading , SetLoading] = useState(false) ;
const [ userRecipe ,setUserRecipe] = useState();
const [ currentOpen ,setCurrentOpen] = useState(null);

const data = {
  user ,
  SetUser,
  loading ,
  SetLoading,
  userRecipe,
  setUserRecipe,
  currentOpen,
  setCurrentOpen
}

  return (
    <>
    <ContextData.Provider value={data}>
    <MyRouter/>
    </ContextData.Provider>
    </>
  )
}


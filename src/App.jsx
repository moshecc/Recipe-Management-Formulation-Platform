import React, { createContext, useState } from 'react'
import MyRouter from './router/MyRouter'
//Lord-Icon
import lottie from 'lottie-web';
import "./App.css"
import { defineElement } from 'lord-icon-element';
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
//
export const ContextData = createContext();


export default function App() {

const [user , SetUser] = useState(null);
const [loading , SetLoading] = useState(false) ;
const [run , setRun] = useState(false) ;
const [logInAcoount , setLogInAcoount] = useState(true) ;
const [pas , setPas] = useState(false) ;
const [currentOpen ,setCurrentOpen] = useState(null);
const [previewUrl, setPreviewUrl] = useState([]);
const [imgFile, setImgFile] = useState([]);
const [apiRecpie,sutapiRecpie] = useState(null);



const data = {
  user ,
  SetUser,
  loading ,
  SetLoading,
  currentOpen,
  setCurrentOpen,
  run ,
  setRun,
  previewUrl,
  setPreviewUrl,
  imgFile,
  setImgFile,
  logInAcoount,
  setLogInAcoount,
  pas,
  setPas,
  apiRecpie,
  sutapiRecpie,
}


  return (
    <>
    <ContextData.Provider value={data}>
    <MyRouter/>
    </ContextData.Provider>
    </>
  )
}


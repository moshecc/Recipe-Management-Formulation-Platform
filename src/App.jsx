import React, { createContext, useState,useEffect } from 'react'
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
const apiKode = "bf50efed1f67407f9bb3dcef2eefac27";
const apiKode1 = "ea016e5b9db3498f85c589b7c89ce135";
const [user , SetUser] = useState(null);
const [loading , SetLoading] = useState(false) ;
const [run , setRun] = useState(false) ;
const [logInAcoount , setLogInAcoount] = useState(true) ;
const [pas , setPas] = useState(false) ;
const [currentOpen ,setCurrentOpen] = useState(null);
const [previewUrl, setPreviewUrl] = useState([]);
const [imgFile, setImgFile] = useState([]);
const [apiRecpie,sutapiRecpie] = useState(null);
const [apiRecpieRan,sutapiRecpieRan] = useState(null);
const [apiData,setapiData] = useState(null);
const [ProPaypal,setProPaypal] = useState(null);
const [recipeNum,setRecipeNum] = useState(null);


useEffect(() => {
  fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKode1}&number=50`
  )
    .then((response) => response.json())
    .then((data) => {sutapiRecpieRan(data); console.log(data);})
    .catch((err) => console.error(err));
}, []);


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
  apiRecpieRan,
  sutapiRecpieRan,
  apiData,
  setapiData,
  ProPaypal,
  setProPaypal,
  recipeNum,
  setRecipeNum
}
  return (
    <>
    <ContextData.Provider value={data}>
    <MyRouter/>
    </ContextData.Provider>
    </>
  )
}


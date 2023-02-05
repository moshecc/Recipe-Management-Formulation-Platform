import React, { useState } from 'react'
import { ContextData } from './context/MyContext'
import MyRouter from './router/MyRouter'
import {db} from "./Firebase"

export default function App() {

const [user , SetUser] = useState();
const [loading , SetLoading] = useState(false) ;

const data = {
  user ,
  SetUser,
  loading ,
  SetLoading

}


  return (
    <>
    <ContextData.Provider value={data}>
    <MyRouter/>
    </ContextData.Provider>
    </>
  )
}


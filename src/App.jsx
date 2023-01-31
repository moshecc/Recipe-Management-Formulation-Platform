import React, { useState } from 'react'
import { ContextData } from './context/MyContext'
import MyRouter from './router/MyRouter'
import {db} from "./Firebase"
export default function App() {

const [user , SetUser] = useState();

const data = {
  user ,
  SetUser

}


  return (
    <>


    <ContextData.Provider value={data}>
    <MyRouter/>
    </ContextData.Provider>
    </>
  )
}


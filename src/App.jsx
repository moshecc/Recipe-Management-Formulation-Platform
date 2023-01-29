import React, { useState } from 'react'
import InputImg from './components/input/InputImg'
import { ContextData } from './context/MyContext'
import MyRouter from './router/MyRouter'



export default function App() {

const [DataUser , SetDataUser] = useState({})


  return (
    <>
    <ContextData.Provider value={"heyy i use context value"}>
    <MyRouter/>
    </ContextData.Provider>
    {/* <InputImg/> */}
    </>
  )
}


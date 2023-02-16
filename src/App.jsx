import React, { createContext, useEffect, useState } from 'react'
import MyRouter from './router/MyRouter'

export const ContextData = createContext();


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


import React from 'react'
import { useContext } from 'react';
import { IoMdReturnRight } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { ContextData } from '../../App';

export default function ApiView() {
  const { apiRecpie,sutapiRecpie} = useContext(ContextData);
  console.log(apiRecpie.instructions);
  console.log(apiRecpie);

  return (
    <>
    <div className="bgImg">
    <Link to={"/main/apiMain"}>
          <div className="btn back-button">
            <div>
              <IoMdReturnRight size={30} />
            </div>
          </div>
        </Link>
          <h1>{apiRecpie.title}</h1>
        {apiRecpie != null?apiRecpie.extendedIngredients.map((item,i)=>(
          <h6 key={i}>{item.original}</h6>
        )): ""}
        { apiRecpie.instructions}
        <img height={40} width={40} src={apiRecpie.spoonacularSourceUrl} alt="" />
    </div>
    </>
  )
}

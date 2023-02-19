import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextData } from '../../App';
import "./Card.css"
export default function Card({item}) {

  const {setCurrentOpen} = useContext(ContextData);

  const  open = ()=>{
    setCurrentOpen(item);
  };

  return (
    <>
    <div className="card text-dark cardHover mb-2" onClick={open}>
          <img className=' imgStyle' height={"100%"} width={"100%"} src="https://i.imagesup.co/images2/4c7cc05dd420f94ff35456056d5a114499bbbb62.jpg" alt="card" />
         <div className="card-img-overlay">
           <h4 className="card-title">{item.name}</h4>
           {/* <p className="card-text">Last updated 3 mins ago</p> */}
           <div>❤️
           <i className="fa-regular fa-heart"></i>
           </div>    
          </div>
    </div>
    </>
  )
}


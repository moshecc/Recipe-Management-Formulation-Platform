import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
export default function Card() {
  return (
    <>
    <Link to={""}>
    <div className="card text-dark cardHover m-3">
          <img className=' imgStyle' height={"100%"} width={"100%"} src="https://i.imagesup.co/images2/4c7cc05dd420f94ff35456056d5a114499bbbb62.jpg" alt="card" />
         <div className="card-img-overlay">
           <h3 className="card-title">Card title</h3>
           <p className="card-text">Last updated 3 mins ago</p>
           <div>❤️
           <i className="fa-regular fa-heart"></i>
           <i className="fa-solid fa-share-nodes ml-5"></i>      
           </div>    
          </div>
    </div>
    </Link>
    </>
  )
}


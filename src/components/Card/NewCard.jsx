import React from 'react'
import { Link } from 'react-router-dom'

export default function NewCard() {
    return (
     <>
     <Link to={"/newrecipe"}>
        <div className="card text-dark NewCardHover m-3">
          <img className='imgStyle' width={"100%"} height={"100%"} src="https://i.imagesup.co/images2/81b86e9d7be9582a7fd0cbc3bd9fdfdb606acac1.jpg" alt="Newcard" />
          <div className="card-img-overlay ">
            <h4 className='d-flex justify-content-center align-items-center'>הוספת מתכון חדש</h4>
            <i className="fa-solid text-dark fa-plus d-flex justify-content-center align-items-center "></i>
          </div>
        </div>
        </Link>
      </>
      )
    }
    
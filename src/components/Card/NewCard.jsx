import React from 'react'
import { Link } from 'react-router-dom'

export default function NewCard() {
    return (
     <>
        <div className="card m-3 p-1 cardHover">
          <img className='card-img imgStyle' width={150} height={70} src="" alt="Newcard" />
          <div className="card-img-overlay ">
            <h4 className='d-flex justify-content-center align-items-center'>הוספת מתכון חדש</h4>
            <Link to={""}>
            <i className="fa-solid text-dark fa-plus d-flex justify-content-center align-items-center "></i>
            </Link>
          </div>
        </div>
      </>
      )
    }
    
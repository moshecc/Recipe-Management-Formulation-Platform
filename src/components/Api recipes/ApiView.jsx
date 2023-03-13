import React from 'react'
import { IoMdReturnRight } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function ApiView() {
  return (
    <>
    <div className="bgImg">
    <Link to={"/apiMain"}>
          <div className="btn back-button">
            <div>
              <IoMdReturnRight size={30} />
            </div>
          </div>
        </Link>
    </div>
    </>
  )
}

import React from "react";
import { Link } from "react-router-dom";
import Login from "../Log in/Login";
import "./HomePage.css";
export default function HomePage() {
  return (
    <>
      <div className="bgImg">
        <img className="position-absolute" src="../../imges/logo.png" alt="" />
        <h1 className="myFont">המתכונים שלי</h1>
        <div className="h-50 pt-4"><Login/></div>
        <h1 className="myFont ">המתכונים שלי</h1>
        <div className="pt-4">
          <Login/>
        </div>
       
        <div className=" justify-content-center d-flex">
          <span>
            <Link className="nav-link active">about us</Link>
          </span>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Login from "../Log in/Login";
import Nav from "../nav/Nav";
import "./HomePage.css";
export default function HomePage() {
  return (
    <>
      <div className="bgImg">
        <Nav/>

        <img className="logo1" src='https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png' alt="" />

        <h3 className="myFont myFontHomePage">המתכונים שלי</h3>
        <Login/>
        <div className=" justify-content-center d-flex">
          <span>
            <Link className="nav-link active">About Us</Link>
          </span>
          <Card/>
        </div>
      </div>
    </>
  );
}

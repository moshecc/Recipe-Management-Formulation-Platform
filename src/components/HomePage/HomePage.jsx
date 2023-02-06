import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Log in/Login";
import "./HomePage.css";
import { useAuth } from '../../Firebase';
import { ContextData } from "../../context/MyContext";

export default function HomePage() {

  const {SetUser , user} = useContext(ContextData)

  const currentUser = useAuth();
  console.log(currentUser);
  SetUser(currentUser);
  console.log(user);
  const navigate = useNavigate();
  return (
    <>
      <div className="bgImg">
        <img className="logo1" src='https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png' alt="" />

        <h3 className="myFont myFontHomePage">המתכונים שלי</h3>
        {currentUser==null?(<Login/>):( navigate("/nav"))}
        
        <div className=" justify-content-center d-flex mt-5">
          <span>
            <Link to={'/aboutus'} className="nav-link active">About Us</Link>
          </span>
        
        </div>
      </div>
    </>
  );
}

import React, { useContext } from "react";
import { IoMdReturnRight } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { ContextData } from "../../App";
import "./Pro.css"

export default function Pro() {

  const { setProPaypal } = useContext(ContextData);
  const navigate = useNavigate();

  function paymant(price, name , rec) {
    let temp = {
      price,
      name,
      rec
    }
    setProPaypal(temp);
    navigate("/main/pro/creditcard")
  }

  return (
    <>
      <div className="bgImg">
      
        <Link to={"/main"}>
          <div className="btn back-button">
            <div><IoMdReturnRight size={30} /></div>
          </div>
        </Link>
        <div className="row justify-content-center">
        <b className="d-flex h2 justify-content-center align-items-center mb-5 mt-5 text-pro">ברוכים הבאים לגרסת הפרמיום</b>
        <div className=" container row justify-content-center ">

          <div class=" mr-2 mb-2 border bc-card bc-card mt-0 mt-lg-5" style={{ width: "16rem", height: "21rem" }}>
            <b className="bg-pro d-flex justify-content-center align-items-center" style={{ height: "4rem" }}>Basic</b>
            <div class="card-body">
              <h2 class="d-flex justify-content-center align-items-center">₪0</h2>
              <div className="mt-3 mb-3 c">
                <span className="d-flex h5 justify-content-center">   עד 50 מתכונים *</span>
                <span className="d-flex h5 justify-content-center">  פרסומות *</span>
                <span className="d-flex h5 justify-content-center">n</span>
                <span className="d-flex h5 justify-content-center">n</span>
              </div>
              <div className="col-12 btn border bg-secondary">Free</div>
            </div>
          </div>
          <div class="mr-2 mb-2 border bc-card bc-card" style={{ width: "16rem", height: "21rem" }}>
            <b className="bg-pro d-flex justify-content-center align-items-center" style={{ height: "4rem" }}>Chef</b>
            <div class="card-body">
              <h2 class="d-flex justify-content-center align-items-center">₪100</h2>
              <div className="mt-3 mb-3 c">
                <span className="d-flex h5 justify-content-center">   יותר מ50 מתכונים *</span>
                <span className="d-flex h5 justify-content-center"> ללא פרסומות *</span>
                <span className="d-flex h5 justify-content-center">n</span>
                <span className="d-flex h5 justify-content-center">n</span>
              </div>
              <div onClick={() =>{ paymant("100.00" , "Chef" ,"עד 300 מתכונים")}} className="col-12 btn border bg-danger shake">קנה עכשיו</div>
            </div>
          </div>
          <div class="mr-2 mb-2 border bc-card bc-card mt-0 mt-lg-5" style={{ width: "16rem", height: "21rem" }}>
            <b className="bg-pro d-flex justify-content-center align-items-center" style={{ height: "4rem" }}>Pro</b>
            <div class="card-body">
              <h2 class="d-flex justify-content-center align-items-center">₪10</h2>
              <div className="mt-3 mb-3 c">
                <span className="d-flex h5 justify-content-center">  עד 200 מתכונים •</span>
                <span className="d-flex h5 justify-content-center"> ללא פרסומות •</span>
                <span className="d-flex h5 justify-content-center">n</span>
                <span className="d-flex h5 justify-content-center">n</span>
              </div>
              <div onClick={() => {paymant("50.00" , "pro" ,"עד 200 מתכונים" )}} className="col-12 btn border bg-danger shake">קנה עכשיו</div>
            </div>

          </div>
        </div>
        </div>
      </div>
    </>
  );
}

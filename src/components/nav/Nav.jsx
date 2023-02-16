import React, { useContext, useEffect, useState } from "react";
import "./Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Burger from "./Burger";
import { ContextData } from "../../App";

export default function Nav() {
  const [burger, sutBurger] = useState(false);
  const {user} = useContext(ContextData);

  function hideBurger() {
    sutBurger(!burger);
  }
  useEffect(()=>{
    console.log(user)
  },[user])

  return (
    <div className="container-fluid sticky-top">
      <div className="myNav row ">
        <div className="col-2 d-flex align-items-center">
          <div className="logoNav">
            <img
              className="logoNavImg"
              src="https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-6  pr-0 pl-0 d-flex justify-content-center align-items-center">
          <h2 className="myFont">המתכונים שלי</h2>
        </div>
        <div className="col-3 fst-italic fs-2 pr-0 pl-0 d-flex justify-content-center align-items-center">
          {!burger ? <div className="name">Hello Moshe</div> : ""}
        </div>
        <div className="col-1 pr-0 pl-0 d-flex align-items-center">
          <div className="" onClick={hideBurger}>
            <GiHamburgerMenu size={"30px"} className="thebur" />
          </div>
        </div>
      </div>
      {burger ? (
        <div className="burger">
          <div className="d-flex justify-content-end">
            <Burger />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

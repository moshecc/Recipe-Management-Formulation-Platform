import React from "react";
import "./Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Burger from "./Burger";

export default function Nav() {
  function sutBurger() {
    var x = document.querySelector(".burger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div className="">
      <div className="myNav row sticky-top">
        <div className="col-2 d-flex">
          <div className="logoNav m-1 ml-2 align-items-center">
            <img
              className="logoNavImg"
              src="https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-7">
          <h2 className="myFont">המתכונים שלי</h2>
        </div>
        <div className="col-3 ">
          <div className="d-flex justify-content-end m-2" onClick={sutBurger}>
            <GiHamburgerMenu size={"30px"} />
          </div>
        </div>
      </div>
      <div className="burger" style={{ display: "block" }}>
        <div className="d-flex justify-content-end">
          <Burger />
        </div>
      </div>
    </div>
  );
}

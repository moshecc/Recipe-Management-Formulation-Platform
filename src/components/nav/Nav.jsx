import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="myNav container-fluid d-flex align-items-center sticky-top">
      <div className="col-2 d-flex align-items-center">
        <div className="logoNav ml-3 align-items-center">
          <img
            className="logoNavImg"
            src="https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png"
            alt=""
          />
        </div>
      </div>

      <div className="col-5 ">
        <h2 className="myFont">המתכונים שלי</h2>
      </div>
        <div class="input-group col-3">
          <input
            type="text"
            class="form-control rtl"
            placeholder="חפש מתכון"
            aria-label="search recipe"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i className="fa-solid fa-magnifying-glass px-3"></i>
          </button>
      </div>
      <div className="col-2 justify-content-center d-flex">hayim hale </div>
    </div>
  );
}

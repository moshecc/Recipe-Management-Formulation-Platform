import React from "react";
import "./AboutUs.css";
import "../newRecipe/NewRecipe.css"
import { IoMdReturnRight } from "react-icons/io";
import { SiFacebook, SiGmail, SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <div className="bgImg ">
        <Link to={"/"}>
          <div className="btn back-button">
            <div><IoMdReturnRight size={30} /></div>
          </div>
        </Link>
        <div className="container-fluid w-100 d-flex justify-content-center">
          <div className="aboutUs mt-5 col-9">
            <div>
              <h1 className="d-flex mt-4 justify-content-center color-bg">קצת עלינו</h1>
              <p className="d-flex mt-4 justify-content-center text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores aperiam nisi eaque libero ullam impedit laudantium
                similique quaerat ratione ex quae, inventore at quidem
                recusandae quibusdam officiis optio? Tempora, soluta.
              </p>
              {/* <a href="tel:054675119">054675119</a> */}
              <div>
                <div className="d-flex justify-content-center mt-5 about-text">
                  <h3 className="col-8 color-bg">  פרטים ליצירת קשר</h3>
                </div>
                <div className="row d-flex justify-content-center mt-4 mb-4">
                  <div className="card card-style m-1">
                    <div className="card-body ">
                      <div className="d-flex justify-content-center">
                        <samp className="about-text d-flex fontW align-items-center">צרו איתנו קשר דרך המייל</samp>
                        <lord-icon
                          src="https://cdn.lordicon.com/egpbfgcp.json"
                          trigger="hover"
                          colors="primary:#c71f16,secondary:#109121"
                          style={{ width: "70px", height: "70px" }}>
                        </lord-icon>
                      </div>
                      <span className="card-text row d-flex justify-content-center mt-2">
                        <SiGmail className="mt-1 mb-2" size={20} color="red" />
                        <div className="ml-2 myFont">myrecipebook23@gmail.com</div>
                      </span>
                    </div>
                  </div>
                  <div className="card card-style m-1">
                    <div className="card-body ">
                      <div className="d-flex justify-content-center">
                        <samp className="about-text d-flex fontW align-items-center"> עקבו אחרינו בדף האנסטגרם</samp>
                        <lord-icon
                          src="https://cdn.lordicon.com/ridbdkcb.json"
                          trigger="hover"
                          colors="primary:#e8308c,secondary:#c76f16"
                          style={{ width: "70px", height: "70px" }}>
                        </lord-icon>
                      </div>
                      <span className="card-text row d-flex justify-content-center mt-2">
                        <SiInstagram className="mt-1 mb-2" size={20} color="purple" />
                        <div className="ml-2 myFont">myrecipebook23@gmail.com</div>
                      </span>
                    </div>
                  </div>
                  <div className="card card-style m-1">
                    <div className="card-body ">
                      <div className="d-flex justify-content-center">
                        <samp className="about-text d-flex fontW align-items-center"> בקרו בדף שלנו בפייסבוק </samp>
                        <lord-icon
                          src="https://cdn.lordicon.com/ppezgpha.json"
                          trigger="hover"
                          colors="primary:#2516c7,secondary:#848484"
                          style={{ width: "70px", height: "70px" }}>
                        </lord-icon>
                      </div>
                      <span className="card-text row d-flex justify-content-center mt-2">
                        <SiFacebook className="mt-1 mb-2" size={20} color="blue" />
                        <div className="ml-2 myFont">myrecipebook23@gmail.com</div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

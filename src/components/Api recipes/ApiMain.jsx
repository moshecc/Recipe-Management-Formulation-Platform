import React, { useEffect, useState, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdReturnRight } from "react-icons/io";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import ApiCard from "./ApiCard";
import "./ApiMain.css";
export default function ApiMain() {
  const apiKode = "bf50efed1f67407f9bb3dcef2eefac27";
  const apiKode1 = "ea016e5b9db3498f85c589b7c89ce135";
  const [apiData,setapiData] = useState([]);
  const [product,setproduct] = useState();
  const refInput = useRef();
console.log(apiData);
  useEffect(() => {
    fetch(
      // `https://api.spoonacular.com/recipes/complexSearch?query=${product}&apiKey=${apiKode1}&number=50`
    )
      .then((response) => response.json())
      .then((data) => {setapiData(data.results); console.log(data);})
      .catch((err) => console.error(err));
  }, []);

  function Search(){
    console.log(refInput.current.value);
    setproduct(refInput.current.value);
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${product}&apiKey=${apiKode1}&number=50`
    )
      .then((response) => response.json())
      .then((data) => {setapiData(data.results); console.log(data);})
      .catch((err) => console.error(err));
  }
  return (
    <>
      <div className="bgImg">
        <Nav />
        <Link to={"/main"}>
          <div className="btn back-button-ipa">
            <div>
              <IoMdReturnRight size={30} />
            </div>
          </div>
        </Link>
        <div className="d-flex justify-content-center mt-5">
          <div className="input-group col-10 col-sm-8">
          <button
              className="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={()=> Search()}
            >
              <BiSearchAlt size={20}/>
            </button>
            <input
              ref={refInput}
              dir="rtl"
              type="search"
              className="form-control inputStyle"
              placeholder="הכנס שם מתכון"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
        <div className="mt-5 row justify-content-center">
        {apiData.length>0?apiData.map((item,i)=>(
          <div className="mr-2 mb-3">
        <ApiCard key={i} item={item} />
        </div>
        )):""}
        </div>
      </div>
    </>
  );
}

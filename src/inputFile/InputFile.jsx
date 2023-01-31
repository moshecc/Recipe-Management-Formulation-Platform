import React, { useState } from "react";
import "./InputFileStyle.css";
import { BiImageAdd } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

export default function InputFile() {
  const [previewUrl, setPreviewUrl] = useState(
    "https://files.mishloha.co.il/files/rest_header/RHMM_600186_1653480403159.jpg"
  );
  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
function dal(){
  setPreviewUrl("https://files.mishloha.co.il/files/rest_header/RHMM_600186_1653480403159.jpg");
}
  return (
    <>
      <div className="inp_img">
        <img
          className="imgNewResipeStyle"
          height={100}
          src={previewUrl}
          alt=""
        />
        <div className="inp_continer ">
          <input onChange={handleChange} className="inp_hide" type="file" name="" id="" />
          <div className="inp_caver">
            הוסף תמונה <div><BiImageAdd/></div>
          </div>
        </div>
      </div>
      <div onClick={dal} className="row m-2 align-items-center"><FaTrashAlt className="trash"/></div>
    </>
  );
}

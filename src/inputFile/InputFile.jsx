import React, { useState } from "react";
import "./InputFileStyle.css";
import { BiImageAdd } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { useRef } from "react";

export default function InputFile() {
  const [previewUrl, setPreviewUrl] = useState(
"https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png"
    );
  const [trash,settrash] = useState(false);
  const imgref = useRef();

  const handleChange = (e) => {
    const url = URL.createObjectURL(imgref.current.files[0]);
    setPreviewUrl(url);
    settrash(true);
  };

function dal(){
  setPreviewUrl("https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png");
  settrash(false);
  imgref.current.value = null;
}
  return (
    <>
      <div className="inp_img bgInpot">
        <img
          className="imgNewResipeStyle"
          height={100}
          src={previewUrl}
          alt= " "
        />
        <div className="inp_continer ">
          <input onChange={handleChange} ref={imgref} className="inp_hide" type="file" name="" id="" />
          <div className="inp_caver">
           ! תלחץ וגרור<div><BiImageAdd/></div>
          </div>
        </div>
      </div>
      {trash && 
      <div onClick={dal} className="row m-2 align-items-center"><FaTrashAlt className="trash"/></div>}
    </>
  );
}

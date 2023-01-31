import React, { useState } from "react";
import "./InputFileStyle.css";
import { BiImageAdd } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

export default function InputFile() {
  const [previewUrl, setPreviewUrl] = useState(
"https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png"
    );
  const [trash,settrash] = useState(false);

  const handleChange = (e) => {
    if(!e)
      return;
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewUrl(reader.result);
      console.log("load before:", trash);
      settrash(true);
      console.log("load after:", trash);

    };
    reader.readAsDataURL(file);
  };
function dal(){
  setPreviewUrl("https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png");
  handleChange()
  console.log("before:", trash);
  settrash(false);
  console.log("after:", trash);
}
  return (
    <>
      <div className="inp_img">
        <img
          className="imgNewResipeStyle"
          height={100}
          src={previewUrl}
        />
        <div className="inp_continer ">
          <input onChange={handleChange} className="inp_hide" type="file" name="" id="" />
          <div className="inp_caver">
            הוסף תמונה <div><BiImageAdd/></div>
          </div>
        </div>
      </div>
      {trash && 
      <div onClick={dal} className="row m-2 align-items-center"><FaTrashAlt className="trash"/></div>}
    </>
  );
}

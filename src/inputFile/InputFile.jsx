import React, { useState } from "react";
import "./InputFileStyle.css";

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
            הוסף תמונה <div>+</div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
// import "./InputImg.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
export default function InputImg() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <>
      <div>
        <form
          action=""
          onClick={() => document.querySelector(".input-field").click()}
        >
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onClick={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />
          {
            image ? 
              <img src={image} width={160} height={160} alt={fileName} />
             : 
             <>
              <MdCloudUpload color="#1475cf" size={60} />
              <p>Browse Files to Upload</p>
             </>
          }
        </form>
        <section className="uploaded-row">
            <AiFillFileImage color="#1475cf" />
            <span className="upload-content">
                {fileName}-
            <MdDelete onClick={()=>{
                setFileName("No selected file")
                setImage(null)
            }}/>
            </span>
        </section>

      </div>
    </>
  );
}

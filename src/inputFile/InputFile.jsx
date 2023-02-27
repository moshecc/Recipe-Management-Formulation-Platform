import React, { useState } from "react";
import "./InputFileStyle.css";
import { BiImageAdd } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";

export default function InputFile() {
  const [previewUrl, setPreviewUrl] = useState([ ]);
  const [trash, settrash] = useState(true);
  const imgref = useRef();
  console.log(previewUrl);
  const handleChange = (e) => {
    const url = URL.createObjectURL(imgref.current.files[0]);
    setPreviewUrl([...previewUrl, url]);
    settrash(true);
  };

  function dal(i) {
    console.log(i);
    setPreviewUrl(previewUrl.filter((e)=>e!=previewUrl[i]));

  }
  return (
    <>
      <div className="bgInpot  container-fluid   ">
        <div className="inp_continer inp_img container mt-2 mb-2">
          <input
            onChange={handleChange}
            ref={imgref}
            className="inp_hide"
            type="file"
            name=""
            id=""
          />
          <div className="inp_caver">
            ! תלחץ וגרור
            <div>
              <BiImageAdd />
            </div>
          </div>
        </div>
        <Carousel
          showThumbs={false}
          thumbWidth={40}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          className="container mb-2 caruselStyle"
        >
          {previewUrl.map((item, i) => (
            <div key={i}>
              <img className="imgCarouselInput" src={item} />
                <div onClick={()=>{dal(i)}} className="trash">
                  <FaTrashAlt />
                </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

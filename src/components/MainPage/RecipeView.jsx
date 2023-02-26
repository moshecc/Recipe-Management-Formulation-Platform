import React, { useContext, useEffect, useState } from "react";
import "./RecipeView.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ContextData } from "../../App";
import Plus from "./Plus";

export default function RecipeView() {

  const [data , setData]= useState(undefined);
  
  const {currentOpen} = useContext(ContextData);

  useEffect(()=>{
    setData(currentOpen);
  },[currentOpen]);

console.log("uu");
  let datal = [
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  return (
      <div className="my-2 d-flex  ">
        {data==undefined||currentOpen==undefined?(<div className="RecipeViewContiner shadow col-12 imgLogo_container">
          <img className="imgLogo " src='https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png' alt="logo" />
        </div>):(
        <div className="RecipeViewContiner shadow col-12 ">
          <h2 className="d-flex justify-content-center">{currentOpen.name}</h2>
          <div className="row">
            <div className="img_div col-12 col-sm-6">
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
              >
                {datal.map((item, i) => (
                  <img key={i} className="imgCarousel " src={item} />
                ))}
              </Carousel>
            </div>
            <div className="col-12 col-sm-6 ">
            <h3 className="col-12 d-flex justify-content-center">מרכיבים</h3>
            {currentOpen.ingredients.map((item,i)=>
            <div dir="rtl" className="d-flex col-12 justify-content-start ing_style" key={i}>• {item}</div>
            )}
            </div>
          </div>    
            <div className="plus"><Plus/></div>
          <h3 className=" d-flex justify-content-center justify-content-start ">אופן הכנה</h3>
          {currentOpen.instructions.map((item,i)=>
            <div dir="rtl" className="d-flex col-12 text-break ing_style" key={i}>{i+1} . {item}</div>
            )}
        </div>
        )}
      </div>
  );
}

import React from "react";
import "./RecipeView.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from "../nav/Nav"

export default function RecipeView() {

 let data = [
"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400",
"https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",
"https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400",
]


  return (
    <div className="bgImg">
      <Nav/>
      <div className="m-2">
    <div className="RecipeViewContiner border col-12 col-sm-8 ">
      <h2 className="d-flex justify-content-center">new recipe</h2>
      <div className="row">
        <div className="img_div col-12 col-sm-6">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {data.map((item, i) => (
                    <img
                    key={i}
                    className="imgCarousel "
                    src={item}
                    />
          ))}
        </Carousel>
        </div>
        <h3 className="col-12 col-sm-6 d-flex justify-content-center">מרכיבים</h3>
      </div>
      <h3 className=" d-flex justify-content-center">אופן הכנה</h3>
    </div>
    </div>
    </div>
  );
}

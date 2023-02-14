import React from "react";
import Card from "../Card/Card";
import NewCard from "../Card/NewCard";
import "./RecipeList.css";
export default function recipeList() {
  return (
    <>
      <div className="col-12">
        <div  className="overrecipe col-12">
          <form action="" className="search-bar">
            <input className="inputStyle" type="search" name="search" placeholder=" שם מתכון:" pattern=".*\S.*" required  dir="rtl"/>
            <button className="search-btn" >
            </button>
          </form>
          <div className="col-11">
         <NewCard />
         <Card />   
         <Card />   
         <Card />   
         <Card />   
         <Card />   
         <Card />   
         </div>
         
        </div>
        </div>
    </>
  );
}

import React from "react";
import Card from "../Card/Card";
import NewCard from "../Card/NewCard";
import "./RecipeList.css";
export default function recipeList() {
  return (
    <>
      <div className="d-flex justify-content-center shadow">
        <div className="overrecipe">
          <form action="" className="search-bar">
            <input className="inputStyle" type="search" name="search" placeholder=" שם מתכון:" pattern=".*\S.*" required  dir="rtl"/>
            <button className="search-btn" type="submit">
            </button>
          </form>
          <NewCard />
         <Card />   
         <Card />   
         <Card />   
         <Card />   
         <Card />   
         <Card />   

         
        </div>
      </div>
    </>
  );
}

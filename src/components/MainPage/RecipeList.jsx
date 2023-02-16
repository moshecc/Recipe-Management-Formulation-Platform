import { async } from "@firebase/util";
import { query, where } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ContextData } from "../../App";
import { CurrentUser, UserRecipes,  } from "../../Firebase";
import Card from "../Card/Card";
import NewCard from "../Card/NewCard";
import "./RecipeList.css";
export default function RecipeList() {



const {user , userRecipe ,setUserRecipe} = useContext(ContextData);
console.log(user.uid);

const [data , setData]= useState(undefined);

useEffect(()=>{
  UserRecipes(user.uid, setUserRecipe);
},[]);

useEffect(()=>{
  console.log(userRecipe);
  console.log(user.uid);
  setData(userRecipe);
},[userRecipe])

 const mapRender = ()=>{
  if(data != undefined ){
    return( data.map((item,i)=>
    <div key={i}>
      {console.log(item)}
     <Card item={item} />   
    </div>
    ))
   }
  };



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
         {userRecipe==null?"":mapRender()}
         </div>
         
        </div>
        </div>
    </>
  );
}

import { async } from "@firebase/util";
import { query, where } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ContextData } from "../../App";
import { CurrentUser, useAuth, UserRecipes,  } from "../../Firebase";
import Card from "../Card/Card";
import NewCard from "../Card/NewCard";
import "./RecipeList.css";
export default function RecipeList() {



const {user , userRecipe ,setUserRecipe ,SetUser} = useContext(ContextData);

const [data , setData]= useState(undefined);
const [uid , setUid]= useState(undefined);

const currentUser = useAuth();
useEffect(()=>{
  if(currentUser)
  SetUser(currentUser);
},[currentUser]);


useEffect(()=>{
  if(user!=undefined){
  UserRecipes(user.uid, setUserRecipe);
  }
},[user]);

useEffect(()=>{
console.log(userRecipe);
  setUid(user);
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
      <div className="col-12 mt-2 px-0 ">
        <div  className="overrecipe col-12">
          <form action="" className="search-bar">
            <input className="inputStyle" type="search" name="search" placeholder=" שם מתכון:" pattern=".*\S.*" required  dir="rtl"/>
            <button className="search-btn" >
            </button>
          </form>
          <div className="col-12">
         <NewCard />
         {userRecipe==null?"":mapRender()}
         </div>
         
        </div>
        </div>
    </>
  );
}

import { async } from "@firebase/util";
import { query, where } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CurrentUser,  } from "../../Firebase";
import Card from "../Card/Card";
import NewCard from "../Card/NewCard";
import "./RecipeList.css";
export default function RecipeList() {

// const [ user ,setUser] = useState();
const user = CurrentUser();
console.log(user);
// console.log(user.uid);

// useEffect(async() => {
//  let id =  user.uid;
// },[])


// const userRecipe = query(where("id:","==",`${user.uid}`))
// console.log(userRecipe);

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
         
         </div>
         
        </div>
        </div>
    </>
  );
}

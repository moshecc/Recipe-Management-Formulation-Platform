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

const [ userRecipe ,setUserRecipe] = useState();


const {user} = useContext(ContextData);
console.log(user.uid);


useEffect(()=>{
  UserRecipes(user.uid, setUserRecipe);
},[]);

useEffect(()=>{
  console.log(userRecipe);
  console.log(user.uid)
},[userRecipe])



// const getUserRecipe = async ()=>{
//   const user =await CurrentUser();
//   let uid = await user.uid;
//   console.log(uid);
// }
// getUserRecipe();
// useEffect(async() => {
//  let id =  user.uid;
// },[])


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

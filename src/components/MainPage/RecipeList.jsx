import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextData } from "../../App";
import { useAuth } from "../../Firebase";
import Card from "../Card/Card";
import NewCard from "../Card/NewCard";
import "./RecipeList.css";
import { UserRecipes } from '../../Firebase';



export default function RecipeList() {
  const { SetUser ,user} = useContext(ContextData);
  const [ userRecipe ,setUserRecipe] = useState(null);

  const [filter, setfilter] = useState(null);

  const currentUser = useAuth();

  console.log("fff");

  useEffect(() => {
    if (currentUser) SetUser(currentUser);
   
  }, [currentUser]);

  if (user != undefined && userRecipe == null) {
    UserRecipes(user.uid, setUserRecipe);
  }
  


  return (
    <>
      <div className="col-12 mt-2 px-0 ">
        <div className="overrecipe col-12">
          <form className="search-bar">
            <input
              className="inputStyle"
              type="search"
              placeholder=" שם מתכון:"
              pattern=".*\S.*"
              required
              dir="rtl"
              onChange={(e) => setfilter(e.target.value)}
            />
            <div className="search-btn"></div>
          </form>

          <div className="col-12">
            <NewCard />
            {userRecipe == null
              ? ""
              : filter == null
              ? userRecipe.map((item, i) => (
                  <div key={i}>
                    <Card item={item} />
                  </div>
                ))
              : userRecipe
                  .filter((recipe) => recipe.name.startsWith(filter))
                  .map((item, i) => (
                    <div key={i}>
                      <Card item={item} />
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </>
  );
}

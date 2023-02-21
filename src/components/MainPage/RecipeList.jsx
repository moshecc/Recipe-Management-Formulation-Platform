import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextData } from "../../App";
import { useAuth } from "../../Firebase";
import Card from "../Card/Card";
import NewCard from "../Card/NewCard";
import "./RecipeList.css";
export default function RecipeList() {
  const { userRecipe, SetUser} = useContext(ContextData);

  const currentUser = useAuth();
  useEffect(() => {
    if (currentUser) SetUser(currentUser);
  }, [currentUser]);

  
  return (
    <>
      <div className="col-12 mt-2 px-0 ">
        <div className="overrecipe col-12">
          <form action="" className="search-bar">
            <input
              className="inputStyle"
              type="search"
              placeholder=" שם מתכון:"
              pattern=".*\S.*"
              required
              dir="rtl"
            />
            <div className="search-btn"></div>
          </form>
          {/* {userRecipe.map((item,i)=>(
              <p>{item.name}</p>
                  ))} */}
          <div className="col-12">
            <NewCard />
            {userRecipe == null 
              ? ""
              : userRecipe.map((item, i) => (
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

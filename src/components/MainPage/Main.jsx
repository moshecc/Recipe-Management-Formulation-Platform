import React from "react";
import { useContext } from "react";
import { ContextData } from "../../App";
import Nav from "../nav/Nav";
import RecipeList from "./RecipeList";
import RecipeView from "./RecipeView";

export default function Main() {
  const {user} = useContext(ContextData);

  return (
    <>
    {user?
    <div className="bgImg">
      <Nav />
      <div className="d-lg-flex flex-row">
        <div className="col-lg-8 col-12 ">
          <RecipeView />
        </div>
        <div className="col-lg-4 col-12">
          <RecipeList />
        </div>
      </div>
    </div>:""}
   </>
  );
}

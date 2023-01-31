import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import "./NewRecipe.css";
import  RecipeData from"../../Classes/ClassNewRecipe"
import InputFile from "../../inputFile/InputFile";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";


export default function NewRecipe() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  
  const [dataname, setdataname] = useState([]);
  const refName = useRef();
  const refIngredients = useRef();
  const refInstructions = useRef();



  let set  = function setRecipe() {
    let name = refName.current.value;
    let ingredients = refIngredients.current.value;
    let instructions = refInstructions.current.value;
    
    ingredients = ingredients.split("\n");
    instructions =instructions.split("\n");

    let newRecipeData = new RecipeData(name,ingredients,instructions)
    console.log(newRecipeData);
    
  };
  return (
    <div className="bgImg">
      <div dir="rtl" className="d-flex justify-content-center m-3">
        <div className="newRecipeForm p-md-5  col-12 col-md-9  border flex-column d-flex justify-content-center my-5">
          <h1 className="d-flex justify-content-center myFont">מתכון חדש</h1>
          <div className="d-flex justify-content-center">
            <Box
              component="form"
              className="col-11"
              sx={{ "& .MuiTextField-root": { m: 2, width: "160ch" } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <div className="d-flex justify-content-center">
                  <TextField
                    id="outlined-multiline-flexible"
                    className="bgInpot"
                    label="שם מתכון"
                    placeholder="שם מתכון"
                    color="warning"
                    inputRef={refName}
                    
                  />
                </div>
                <div className="d-flex justify-content-end mr-3" dir= "ltr"><InputFile/></div>
                <div className="d-flex justify-content-center">
                  <TextField
                    id="outlined-textarea"
                    className="bgInpot"
                    label="מרכיבים"
                    placeholder="מרכיבים"
                    color="warning"
                    multiline
                    inputRef={refIngredients}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <TextField
                    id="outlined-multiline-static"
                    label="אופן הכנה"
                    placeholder="אופן הכנה"
                    className="bgInpot"
                    multiline
                    color="warning"
                    rows={5}
                    inputRef={refInstructions}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    onClick={set}
                    type="button"
                    className ="btn btn-secondary m-3 border"
                  ><BiMessageSquareAdd/> הוסף מתכון
                  </button>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

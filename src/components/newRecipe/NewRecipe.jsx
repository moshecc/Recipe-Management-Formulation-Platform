import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import Nav from "../nav/Nav";
import "./NewRecipe.css";
import  RecipeData from"../../Classes/ClassNewRecipe"

export default function NewRecipe() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(
    "https://files.mishloha.co.il/files/rest_header/RHMM_600186_1653480403159.jpg"
  );
  const [dataname, setdataname] = useState([]);
  const refName = useRef();
  const refIngredients = useRef();
  const refInstructions = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(file);
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  let set  = function setRecipe() {
    let name = refName.current.value;
    let temp = refIngredients.current.value;
    console.log(name);
    let strIngredients = new Array;
    console.log("hhh");
    console.log(typeof temp);
    console.log("hhh");

    let h = temp.split("\\");
    console.log(h);
    console.log(temp);

    // while(temp.)

    console.log(strIngredients)
    let instructions = refInstructions.current.value;
    let newRecipeData = new RecipeData(name,strIngredients,instructions)
    console.log(newRecipeData);
    setdataname(instructions)
    
  }



  return (
    <div className="bgImg">
      {/* <Nav /> */}
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
                <div className="m-3 d-flex justify-content-center">
                  <div className="ml-5" style={{ cursor: "pointer" }}>
                    <i class="fa fa-cloud-upload"></i> בחר תמונה
                    <input
                      className="inputStyle "
                      type="file"
                      onChange={handleChange}
                    />
                  </div>
                  <img
                    className="imgNewResipeStyle"
                    width={250}
                    src={previewUrl}
                    alt=""
                  />
                </div>
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
                <div className="d-flex justify-content-start">
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
                  <div className="d-flex justify-content-start">
                  <button onClick={set} type="button" class="btn btn-secondary m-3 ">
                  הוסף מתכון  
                    <i className="fa-solid fa-plus mr-2"></i> 
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

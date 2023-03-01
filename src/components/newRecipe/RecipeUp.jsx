import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import "./NewRecipe.css";
import RecipeData from "../../Classes/ClassNewRecipe";
import InputFile from "../../inputFile/InputFile";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { BsPlusSquareDotted } from "react-icons/bs";
import Dialog from "@mui/material/Dialog";
import { useAuth, db, storage } from "../../Firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { ContextData } from "../../App";
import { IoMdReturnRight } from "react-icons/io";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

export default function RecipeUp() {  
  const navigate = useNavigate();
  const { currentOpen ,setCurrentOpen ,setPreviewUrl ,setImgFile ,imgFile ,previewUrl  } = useContext(ContextData);
  const [open, setOpen] = useState(false);
  const [nameRecipe, setNameRecipe] = useState(currentOpen.name);
  const [ingredients, setIngredients] = useState(
    currentOpen.ingredients.toString().replaceAll(",", "\n")
  );
  const [instructions, setInstructions] = useState(
    currentOpen.instructions.toString().replaceAll(",", "\n")
  );

 
  async function setUp() {
     let newRecipeData =await new RecipeData(
      nameRecipe,
      ingredients.split("\n"),
      instructions.split("\n"),
      currentOpen.id
    );
    newRecipeData.favorite=currentOpen.favorite;

    await updateDoc(doc(db, "recepis", currentOpen.docId), {
      ...newRecipeData
    });
    for (let index = 0; index < imgFile.length; index++) {
      const imageRef = ref(
        storage,
        `${currentOpen.docId}/${imgFile[index].file.name}`
      );
      uploadBytes(imageRef, imgFile[index].file).then(() => {
        console.log("Uploaded a blob or file!");
      });
    }
    setImgFile([]);
    setPreviewUrl(null)
    setCurrentOpen(undefined);
    navigate("/main");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bgImg">
      <div dir="rtl" className="d-flex justify-content-center m-3">
      <Link to={"/main"}>
          <div className="btn back-button">
            <div><IoMdReturnRight size={30}/></div>
          </div>
        </Link>
        <div className="newRecipeForm p-md-5  col-12 col-md-9  border flex-column d-flex justify-content-center my-5">
          <h1 className="d-flex justify-content-center myFont">עדכן מתכון</h1>
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
                    value={nameRecipe}
                    onChange={(e) => {
                      setNameRecipe(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-end  mr-3 m-1" dir="ltr">
                  <div
                    className="btn"
                    style={{ color: "black", cursor: "pointer" }}
                  >
                    <span className="ml-3"> ערוך תמונות</span>
                    <BsPlusSquareDotted size={35} onClick={handleClickOpen} />
                  </div>
                  <Dialog open={open} onClose={handleClose}>
                    <InputFile />
                  </Dialog>
                </div>
                <div className="d-flex justify-content-center">
                  <TextField
                    id="outlined-textarea"
                    className="bgInpot"
                    label="מרכיבים"
                    placeholder="מרכיבים"
                    color="warning"
                    multiline
                    value={ingredients}
                    onChange={(e) => {
                      setIngredients(e.target.value);
                    }}
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
                    value={instructions}
                    onChange={(e) => {
                      setInstructions(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    onClick={() => {
                      setUp();
                    }}
                    type="button"
                    className="btn btn-secondary m-3 d-flex"
                  >
                     <lord-icon
                      src="https://cdn.lordicon.com/wfadduyp.json"
                      trigger="hover"
                      colors="primary:#000000"
                      style={{width:"25px",height:"25px"}}
                    ></lord-icon>
                    <div>עדכן מתכון</div> 
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

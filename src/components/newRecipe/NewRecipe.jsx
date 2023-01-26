import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import Nav from "../nav/Nav";

export default function NewRecipe() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("https://files.mishloha.co.il/files/rest_header/RHMM_600186_1653480403159.jpg");
  const [newRecipe, setnewRecipe] = useState({});
  const ref = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(file);
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  function set() {
    const data = {
      name: ref.current.value,
    };
    setnewRecipe(data);
  }
  console.log(newRecipe);

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <div className="bgImg">
      <Nav />
      <div dir="rtl" className="d-flex justify-content-center m-3">
        <div className="col-12 col-md-9  border flex-column d-flex justify-content-center mt-5">
          {/* <input type="text" placeholder="שם מתכון:" onChange={set} ref={ref} />
          <h2>{newRecipe.name}</h2> */}
          <div className="d-flex justify-content-center">
            <Box
              component="form"
              className="col-11"
              sx={{ "& .MuiTextField-root": { m: 2, width: "160ch" } }}
              noValidate
              autoComplete="on"
            >
              <div>
                <div className="d-flex justify-content-center">
                  <TextField
                    id="outlined-multiline-flexible"
                    className="bgInpot"
                    label="שם מתכון"
                    placeholder="שם מתכון"
                    color="warning"
                  />
                </div>
                <div className="m-3 d-flex justify-content-start ">
                  <input  className="" type="file" onChange={handleChange} />
                  <img width={150} src={previewUrl} alt="" />
                </div>
                <div className="d-flex justify-content-center">
                  <TextField
                    id="outlined-textarea"
                    className="bgInpot"
                    label="מרכיבים"
                    placeholder="מרכיבים"
                    color="warning"
                    textAlign = "right"
                    rows={4}                  />
                </div>
                <div className="d-flex justify-content-center">
                  <TextField
                    id="outlined-multiline-static"
                    label="אופן הכנה"
                    placeholder="אופן הכנה"
                    className="bgInpot"
                    multiline
                    color="warning"
                    rows={6}
                    defaultValue=""
                  />
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

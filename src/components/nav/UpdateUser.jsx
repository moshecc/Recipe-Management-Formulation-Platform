import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdReturnRight } from "react-icons/io";
import "./UpdateUser.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/system";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import { ContextData } from "../../App";

export default function UpdateUser() {
  const {  user ,SetUser } = useContext(ContextData);

  const [img, setImg] = useState(user.photoURL)
  const imgRef = useRef()
  const refName = useRef();

  function handleChange() {
    const url = URL.createObjectURL(imgRef.current.files[0]);
    setImg(url);
  }

  function handleCgange() {
    console.log(refName.current.value);
  }

  const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });


  return (
    <>
      <div className="bgImg">
        <Link to={"/main"}>
          <div className="btn back-button">
            <div>
              <IoMdReturnRight size={30} />
            </div>
          </div>
        </Link>
        <div className="row justify-content-center ">
          <div className="UpdteUserContiner p-md-5 col-10 col-md-8 flex-column justify-content-center mt-5">
            <div className="col-12">
              <h2 className="d-flex justify-content-center  myFont">
                עדכון משתמש
              </h2>
              <div className="row justify-content-center">
                <div className="Avatar mt-3" style={{ backgroundImage: `url(${img})` }}>
                  <div className="d-flex justify-content-end">
                    <input className="hide" ref={imgRef} onChange={handleChange} type="file" />
                  </div>
                  <div className="d-flex justify-content-end" >
                    <lord-icon
                      src="https://cdn.lordicon.com/vixtkkbk.json"
                      trigger="hover"
                      stroke="70"
                      style={{ width: "40px", height: "40px" }}>
                    </lord-icon>
                  </div>
                </div>
              </div>
            </div>
            <CacheProvider value={cacheRtl}>
            <Box
                  component="form"
                  className="col-12 "
                  sx={{ "& .MuiTextField-root": { m: 2, width: "160ch" } }}
                  noValidate
                  autoComplete="off"
                >
              <div dir="rtl">
                <div className="row justify-content-center mt-4">
                  <div className="col-5 col-sm-4 pl-0 pr-0 d-flex justify-content-center">
                    <TextField
                      id="outlined-multiline-flexible"
                      className=""
                      label="שם"
                      color="error"
                      // value={""}
                      inputRef={refName}
                      onChange={handleCgange}
                    />
                  </div>
                  <div className="col-5 col-sm-4 pl-0 pr-0 d-flex justify-content-center">
                    <TextField
                      id="outlined-multiline-flexible"
                      className=""
                      label=" "
                      // placeholder=" "
                      color="error"
                    // value={""}
                    // inputRef={refName}
                    />
                  </div>
                  <div className="col-10 col-sm-8 pl-0 pr-0 d-flex justify-content-center">
                    <TextField
                      id="outlined-multiline-flexible"
                      className=""
                      label=" "
                      // placeholder=" "
                      color="error"
                    // value={""}
                    // inputRef={refName}
                    />
                  </div>
                  <div className="col-10 col-sm-8 pl-0 pr-0 d-flex justify-content-center">
                    <TextField
                      id="outlined-multiline-flexible"
                      className=""
                      label=" "
                      // placeholder=" "
                      color="error"
                    // value={""}
                    // inputRef={refName}
                    />
                  </div>
                </div>
              </div>
              </Box>
            </CacheProvider>
          </div>
        </div>
      </div>
    </>
  );
}

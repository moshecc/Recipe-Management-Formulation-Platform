import React, { useContext, useEffect, useState} from "react";
import "./Nav.css";
import Burger from "./Burger";
import { ContextData } from "../../App";
import Avatar from "@mui/material/Avatar";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../Firebase";

export default function Nav() {
  const [burger, sutBurger] = useState(false);
  const {user} = useContext(ContextData);
  const [img, setImg] = useState(user!=null?user.photoURL:"");


  useEffect(()=>{
    if (user != null) {
      const imagesListRef = ref(storage, `${user.uid}`);
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            if(url)
            setImg(url);
          });
        });
      });
    }
  },[])

 

  useEffect(() => {
   window.addEventListener("click",()=> sutBurger(false))
  }, [])
  
  return (
    <div id="e" className="container-fluid sticky-top">
      <div className="myNav row ">
        <div className="col-2 d-flex align-items-center">
          <div className="logoNav">
            <img
              className="logoNavImg"
              src="https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-sm-6 col-5 pr-0 pl-0 d-flex justify-content-center align-items-center">
          <h2 className="myFont">המתכונים שלי</h2>
        </div>
        <div className="col-3 fst-italic fs-2 pr-0 pl-0 d-flex justify-content-center align-items-center">
          {!burger ? (
            <div className="name d-flex align-content-center">
              <samp className="mt-2 mr-3 h5 font-weight-bold">{user?`${user.displayName}`:" "}</samp>
              <Avatar className="border " alt="User Name" src={user?`${img}`:" "} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-sm-1 col-2 pr-0 pl-0 d-flex justify-content-center">
          <div className="" onClick={(e) =>{
           e.stopPropagation();
           sutBurger(!burger);
          } }>
            <div className="thebur">
              <lord-icon
                src="https://cdn.lordicon.com/phtfmmnb.json"
                trigger="morph"
                colors="primary:#545454,secondary:#000000"
                stroke="100"
                style={{ width: "60px", height: "60px" }}
              ></lord-icon>
            </div>
          </div>
        </div>
      </div>
      {burger ? (
        <div>
          <div className="d-flex justify-content-end">
            <Burger img={img}  />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

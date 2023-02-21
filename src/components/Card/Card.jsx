import { doc, setDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { ContextData } from "../../App";
import { db } from "../../Firebase";
import "./Card.css";
export default function Card({ item }) {
  
  const { setCurrentOpen ,setRun} = useContext(ContextData);

  const [favo, setFavo] = useState(item.favorite);

  const open = () => {

    setCurrentOpen(item);

    setRun(true);
  };

  function favoriteRecipe() {
    const docref = doc(db, "recepis", item.docId);
    setDoc(docref, { ...item, favorite: favo == "true"?"false":"true" });
    setFavo(favo == "true"?"false":"true");
  }

  return (
    <>
      <div className="card text-dark cardHover mb-2 imgScale" onClick={open}>
      <div className="imgScale">
        <img
          className=" imgStyle"
          height={"100%"}
          width={"100%"}
          src="https://i.imagesup.co/images2/4c7cc05dd420f94ff35456056d5a114499bbbb62.jpg"
          alt="card"
        /></div>
        <div className="card-img-overlay">
          <h4 className="card-title">{item.name}</h4>
          <div className="favo" onClick={favoriteRecipe}>
            <div>
            <lord-icon
              src="https://cdn.lordicon.com/hqrgkqvs.json"
              trigger="hover"
              colors={favo=="true"?"outline:#e83a30,primary:#e83a30,secondary:#ebe6ef":"primary:#121331,secondary:#08a88a"}
              style={{width:"50px",height:"50px"}}
            ></lord-icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { doc, setDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { ContextData } from "../../App";
import { db } from "../../Firebase";
import "./Card.css";
export default function Card({ item }) {
  const { setCurrentOpen, setRun } = useContext(ContextData);

  const [favo, setFavo] = useState(item?.favorite);

  const open = () => {
    setCurrentOpen(item);

    setRun(true);
  };

  function favoriteRecipe() {
    const docref = doc(db, "recepis", item.docId);
    setDoc(docref, { ...item, favorite: favo == "true" ? "false" : "true" });
    setFavo(favo == "true" ? "false" : "true");
  }

  return (
    <>
      <div
        className="card text-dark cardHover mb-2 imgScale p-0"
        style={{ height: "100px" }}
      >
        <div className="imgScale">
          <img
            className=" imgStyle"
            height={"100%"}
            width={"100%"}
            src="https://i.imagesup.co/images2/4c7cc05dd420f94ff35456056d5a114499bbbb62.jpg"
            alt="card"
          />
        </div>
        <div className="card-img-overlay d-flex">
          <div
            className="col-4 pl-0 pr-0 d-flex justify-content-start align-items-end"
            onClick={favoriteRecipe}
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqrgkqvs.json"
              trigger="hover"
              colors={
                favo == "true"
                  ? "primary:#e83a30,secondary:#000000"
                  : "primary:#242424,secondary:#fad3d1"
              }
              style={{ width: "43px", height: "43px" }}
            ></lord-icon>
          </div>
          <h3
            onClick={open}
            className="d-flex justify-content-end col-8 pl-0 pr-0 align-items-center"
          >
            {item.name}
          </h3>
        </div>
      </div>
    </>
  );
}

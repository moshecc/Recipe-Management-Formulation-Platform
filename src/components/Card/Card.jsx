import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../../App";
import { db, storage } from "../../Firebase";
import "./Card.css";
export default function Card({ item }) {
  const { setCurrentOpen, setRun } = useContext(ContextData);


  const [favo, setFavo] = useState(false);
  const [mainImg, setMainImg] = useState([]);

  const open = () => {
    setCurrentOpen(item);
    setRun(true);
  };

  function favoriteRecipe() {
    const docref = doc(db, "recepis", item.docId);
    setDoc(docref, { ...item, favorite: !favo });
    setFavo(!favo);
  }
  useEffect(() => {
    setFavo(item.favorite);
    setMainImg([]);

    if (item != null) {
      const imagesListRef = ref(
        storage,
        `${item.docId == null ? "" : item.docId}`
      );
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setMainImg((mainImg) => [...mainImg, url]);
          });
        });
      });
    }
  }, [item]);

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
            src={
              mainImg[0]
                ? mainImg[0]
                : "https://i.imagesup.co/images2/4c7cc05dd420f94ff35456056d5a114499bbbb62.jpg"
            }
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
                favo
                  ? "primary:#e83a30,secondary:#000000"
                  : "primary:#242424,secondary:#fad3d1"
              }
              style={{ width: "43px", height: "43px" }}
            ></lord-icon>
          </div>
          <h4
            onClick={() => {
              open();
              window.scrollTo(0, 0);
              console.log("click12");
            }}
            className="d-flex justify-content-end col-8 pl-0 pr-0 align-items-center textCard"
          >
            {item.name.charAt(0).toLowerCase() > "a" &&
              item.name.charAt(0).toLowerCase() < "z"
              ? item.name.length < 10
                ? item.name
                : item.name.slice(0, 10) + "..."
              : item.name.length < 10
                ? item.name
                : "..." + item.name.slice(0, 10)}
          </h4>
        </div>
      </div>
    </>
  );
}

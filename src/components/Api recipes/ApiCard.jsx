import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./ApiCard.css";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../../App";

export default function ApiCard({ item }) {
  const apiKode = "bf50efed1f67407f9bb3dcef2eefac27";
  const apiKode1 = "ea016e5b9db3498f85c589b7c89ce135";
  const { sutapiRecpie } = useContext(ContextData);

  const navigate = useNavigate();

  function getRecipe() {
    fetch(
      `https://api.spoonacular.com/recipes/${item.id}/information?includeNutrition=false&apiKey=${apiKode}`
    )
      .then((response) => response.json())
      .then((data) => {
        sutapiRecpie(data)
        navigate("/apiView");
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <Card sx={{ maxWidth: 220 }} onClick={() => getRecipe()}>
        <CardActionArea>
          <CardMedia component="img" width="140" image={item.image} alt="" />
          <span className="cTitle ">{item.title}</span>
        </CardActionArea>
      </Card>
    </>
  );
}

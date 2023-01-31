import React from "react";
import { Link } from "react-router-dom";

export default function PageError() {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <h1>page note found 404</h1>
        <img height={400} src="https://i.imagesup.co/images2/9ded69874813f44587ac93027b531da228735332.jpg" alt="" />
      </div>
      <div className="row justify-content-center mt-5">
        <Link to={'/'}>Go Home 🏠</Link>
        </div>
    </>
  );
}

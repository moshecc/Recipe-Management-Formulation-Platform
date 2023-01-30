import React from "react";
import { Link } from "react-router-dom";

export default function PageError() {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <h1>page note found 404</h1>
      </div>
      <div className="row justify-content-center mt-5">
        <Link to={'./'}>Go Home 🏠</Link>
        </div>
    </>
  );
}

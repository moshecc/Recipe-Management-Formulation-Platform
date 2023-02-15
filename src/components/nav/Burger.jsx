import React, { useContext } from "react";
import { logout } from "../../Firebase";
import { ContextData } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export default function Burger() {
  const { loading, SetLoading } = useContext(ContextData);
  const navigate = useNavigate();
  async function handleLogout() {
    SetLoading(true);
    try {
      await logout();
      navigate("/");
    } catch {
      alert("Error!");
    }
    SetLoading(false);
  }

  return (
    <>
      <div className="cardBurger">
        <div className="">
          <div className="d-flex col-12 p-0">
            <div className="col-9"> Moshe Cohen</div>
            <div className="col-2">
            <Avatar className="border mt-2" alt="User Name" src="" />
            </div>
          </div>

          <div className="m-2"> Moshe </div>
          <div className="m-2"> Moshe </div>
          <div className="m-2"> Moshe </div>
          <div className="m-2"> Moshe </div>
          <button onClick={handleLogout} className="btn bg-danger">
            log out
          </button>
        </div>
      </div>
    </>
  );
}

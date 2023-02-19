import React, { useContext } from "react";
import { logout } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { ContextData } from "../../App";

export default function Burger() {
  const { loading, SetLoading , setCurrentOpen , user } = useContext(ContextData);
  const navigate = useNavigate();

  async function handleLogout() {
    SetLoading(true);
    try {
      await logout();
      setCurrentOpen(null)
      navigate('/');

    } catch {
      alert("Error!");
    }
    SetLoading(false);
  }

  return (
    <>
      <div className="cardBurger ">
          <div className="d-flex col-12  my-2">
            <div className="col-9 px-0 d-flex align-items-center">{user==undefined?" ":`${user.displayName}`}</div>
            <div className="col-3 px-0">
            <Avatar className="border " alt="User Name" src={user==undefined?" ":`${user.photoURL}`} />
            </div>
          </div>
          <div className="row">
          <div className="d-flex justify-content-end mb-2 col-11"> Moshe </div>
          <div className="d-flex justify-content-end mb-2 col-11"> Moshe </div>
          <div className="d-flex justify-content-end mb-2 col-11"> Moshe </div>
          <div className="d-flex justify-content-end mb-2 col-11"> Moshe </div>
          <div className="d-flex justify-content-end mb-2 col-11">
          <button onClick={handleLogout} className=" btn bg-danger">
            Log Out
          </button>
          </div>
          </div>
      </div>
    </>
  );
}

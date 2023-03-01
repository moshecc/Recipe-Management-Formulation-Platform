import React, { useContext } from "react";
import { logout } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { ContextData } from "../../App";
import { BiLogOut } from "react-icons/bi";

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
            <div className="col-9 px-0 d-flex justify-content-center align-items-center">{user==undefined?" ":`${user.displayName}`}</div>
            <div className="col-3 px-0 d-flex justify-content-start">
            <Avatar className="border " alt="User Name" src={user==undefined?" ":`${user.photoURL}`} />
            </div>
          </div>
          <div className="row">
          <Link to={""} className="d-flex justify-content-end  col-11 nav-link  active fs-1 fst-italic">ערןך משתמש</Link>
          <Link to={"/main/pro"} className="d-flex justify-content-end  col-11 nav-link  active fs-1 fst-italic"> שדרג לפרימיום </Link>
          <Link to={""} className="d-flex justify-content-end col-11 nav-link  active fs-1 fst-italic">חפש מתכון חדש</Link>
            <Link to={'/aboutus'} className="d-flex justify-content-end mb-1 col-11 nav-link  active fs-1 fst-italic">About Us</Link>
          <div className="d-flex justify-content-start ml-2 mb-2 col-11">
          <button onClick={handleLogout} className="bg-danger btn d-flex justify-content-start" style={{borderRadius:"15px"}}>
           <div>Log Out</div> 
            <div className="ml-2"><BiLogOut size={20}/></div>
          </button>
          </div>

          </div>
      </div>
    </>
  );
}

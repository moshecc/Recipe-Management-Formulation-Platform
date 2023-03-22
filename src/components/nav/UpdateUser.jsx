import React ,{useRef,useState}from "react";
import { Link } from "react-router-dom";
import { IoMdReturnRight } from "react-icons/io";
import "./UpdateUser.css";

export default function UpdateUser() {
    let str = "https://pbs.twimg.com/profile_images/1265461633461227523/HOcMBb4y_400x400.png"
    const [img,setImg] = useState("https://static.vecteezy.com/system/resources/previews/002/387/693/non_2x/user-profile-icon-free-vector.jpg")
    const imgRef = useRef()

function handleChange(){
    const url = URL.createObjectURL(imgRef.current.files[0]);
    setImg(url);
}

  return (
    <>
      <div className="bgImg">
        <Link to={"/main"}>
          <div className="btn back-button">
            <div>
              <IoMdReturnRight size={30} />
            </div>
          </div>
        </Link>
        <div className="row justify-content-center ">
          <div className="UpdteUserContiner p-md-5 col-10 col-md-8 flex-column justify-content-center mt-5">
            <h2 className="d-flex justify-content-center  myFont">
              עדכון משתמש
            </h2>
            <div className="row justify-content-center">
                <div className="Avatar mt-3" style={{backgroundImage: `url(${img})`}}>
                 <div className="d-flex justify-content-end">
                    <input className="hide" ref={imgRef} onChange={handleChange} type="file"/>
                    </div>
                    <div className="d-flex justify-content-end" >
                    <lord-icon
                        src="https://cdn.lordicon.com/vixtkkbk.json"
                        trigger="hover"
                        stroke="70"
                        style={{width:"40px",height:"40px"}}>
                    </lord-icon>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

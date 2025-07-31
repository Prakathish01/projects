import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
<<<<<<< HEAD


export const Header = () => {
  const [btnName,setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
=======

export const Header = () => {
  const [btnName,setBtnName] = useState("Login");
  const is_online = useOnlineStatus();

>>>>>>> be20052fcc5cf5933555dcde04d88b718da95a40

  return (
    <div className="header">
        <div className="logo-container" >
          <img alt="Foodhub image" src={LOGO_URL} width={"50px"}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>
<<<<<<< HEAD
              <p style={{display:"inline"}}>online status : {onlineStatus ? "🟢" :"🔴"}</p>
=======
              <p style={{display:"inline"}}>Online Status :{is_online?"🟢":"🔴" }</p>
>>>>>>> be20052fcc5cf5933555dcde04d88b718da95a40
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">ContactUs</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button className="loginBtn"
              onClick={()=>{
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}</button>
          </ul> 
        </div>
    </div>
  )
};
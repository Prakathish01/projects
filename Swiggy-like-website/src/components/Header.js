import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
  const [btnName,setBtnName] = useState("Login");

  return (
    <div className="header">
        <div className="logo-container" >
          <img alt="Foodhub image" src={LOGO_URL} width={"50px"}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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
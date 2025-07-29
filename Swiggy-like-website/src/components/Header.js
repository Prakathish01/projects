import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";


export const Header = () => {
  const [btnName,setBtnName] = useState("Login");

  return (
    <div className="header">
        <div className="logo-container" >
          <img alt="Foodhub image" src={LOGO_URL} width={"50px"}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">ContactUs</Link>
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
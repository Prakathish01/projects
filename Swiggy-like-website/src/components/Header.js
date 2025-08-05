import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex fixed top-0 left-0 right-0 justify-between items-center bg-[#c6c6c6] border-2 border-[#000000] h-[70px] z-50">
      <div className="logo-container">
        <img className="w-11" alt="Foodhub image" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex justify-evenly list-none mr-5">
          <li>
            <p style={{ display: "inline" }}>
              online status : {onlineStatus ? "🟢" : "🔴"}
            </p>
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
          <button
            className="ml-1.5"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

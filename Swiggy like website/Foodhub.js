import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
        <div className="logo-container" >
          <img alt="Foodhub imsge" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Superman_Man_of_Steel.jpg/250px-Superman_Man_of_Steel.jpg" width={"50px"}/>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search for food items" />
          <button className="search-btn">Search</button>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul> 
        </div>
    </div>
  );
};
const ResContainer = () => {
  return (
    <div className="res-container">
      <img alt="Foodhub imsge" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Superman_Man_of_Steel.jpg/250px-Superman_Man_of_Steel.jpg" width={"50px"}/>

      <h3>SS Hyderabadi</h3>
      <h4>Indian, Chinese cuisine</h4>
      <h4>4.5 stars</h4>
    </div>
  );
};

const Main=()=>{
  return (
    <div className="main">
      <ResContainer />
      <ResContainer />
      <ResContainer />
      <ResContainer />
      <ResContainer />
      <ResContainer />
      <ResContainer />
      <ResContainer />
      <ResContainer />
      <ResContainer />
      <ResContainer />
      <ResContainer />
    </div>  
  );
};

const Foodhub = () => {
  return (
    <div className="foodhub">
      <Header />
      <Main />
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Foodhub />);

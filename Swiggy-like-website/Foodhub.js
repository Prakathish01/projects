import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import {Body} from "./src/components/Body"
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router";//react-router-dom
import { Error } from "./src/components/Error";
import { ContactUs } from "./src/components/ContactUs";
import About from "./src/components/About";
import { RestaurantMenu } from "./src/components/RestaurantMenu";

const Foodhub = () => {
  return (
    <div className="foodhub">
      <Header />
      <Outlet/>
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Foodhub/> ,
    children :[
    {
      path:"/",
      element:<Body/>
    },  
    {
    path:"/about",
    element:<About/>
    },
    {
    path:"/contact",
    element:<ContactUs/>
    },
    {
      path:"restaurant/:resId",
      element:<RestaurantMenu/>
    }
    ],
    errorElement:<Error/>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

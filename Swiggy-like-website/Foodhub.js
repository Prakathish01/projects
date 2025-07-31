import React, { lazy,Suspense } from "react";
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
const Grocery = lazy(()=>import("./src/components/Grocery"));
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
<<<<<<< HEAD
      path:"restaurant/:resId", 
=======
    path:"/grocery",
    element:<Suspense fallback={<h1>Loading grocery page</h1>}>
      <Grocery/>
    </Suspense>
    },
    {
      path:"restaurant/:resId",
>>>>>>> be20052fcc5cf5933555dcde04d88b718da95a40
      element:<RestaurantMenu/>
    }
    ],
    errorElement:<Error/>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

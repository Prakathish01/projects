import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import {Body} from "./src/components/Body"
import { createBrowserRouter,RouterProvider } from "react-router";
import { Error } from "./src/components/Error";
import { ContactUs } from "./src/components/ContactUs";
import About from "./src/components/About";


const Foodhub = () => {
  return (
    <div className="foodhub">
      <Header />
      <Body/>
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Foodhub/> ,
    errorElement:<Error/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/ContactUs",
    element:<ContactUs/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

import {  RouterProvider } from "react-router-dom";
import routers  from "./routers";


  export function Router() {
    return <RouterProvider router={routers} />;
  }
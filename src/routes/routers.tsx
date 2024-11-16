/* eslint-disable react-refresh/only-export-components */

import { lazy } from "react";
import { createBrowserRouter, } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"))
const LoginPage = lazy(() => import("../pages/LoginPage"))
const ErrorPage = lazy(() => import("../pages/ErrorPage"))





const routers = createBrowserRouter([{
  path: "/",
  element: <HomePage />,
  errorElement: <ErrorPage />

},
{
  path: "/login",
  element: <LoginPage />

},
]);

export default routers
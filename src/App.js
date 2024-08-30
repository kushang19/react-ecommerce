import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./app/pages/Home";
import LoginPage from "./app/pages/LoginPage";
import SignupPage from "./app/pages/SignupPage";
import CartPage from "./app/pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element:<LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element:<SignupPage></SignupPage>,
  },
  { 
    path: "/cart",
    element:<CartPage></CartPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

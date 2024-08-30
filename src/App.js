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
import Checkout from "./app/pages/Checkout";
import ProductDetailPage from "./app/pages/ProductDetailPage";

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
  { 
    path: "/checkout",
    element:<Checkout></Checkout>,
  },
  { 
    path: "/product-detail",
    element:<ProductDetailPage></ProductDetailPage>,
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

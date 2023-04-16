import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import InputForm from "./form";
// import FormValidation from "./form-validetion";
// import ToDoList from "./component/todoList";
// import FetchApi from "./features/products/Products.layout";
import Button from "./features/Button/views/Button.layout";
import Badge from "./features/badge/Badge.Layout";
import ToDo from "./features/todo/ToDo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./component/react-router/product-list";
import ProductDetails from "./component/react-router/productDetails";
import CartBox from "./component/react-router/cartBox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "cart",
    element: <CartBox />,
  },
  {
    path: "product-details/:meraProductId",
    element: <ProductDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);

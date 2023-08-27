import { useState } from "react";
// import { ApiProvider } from "./ContextApi";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductList from "./product-list";
import CartBox from "./cartBox";
import ProductDetails from "./productDetails";

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

const Maiin = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Maiin;

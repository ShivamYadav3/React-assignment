import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
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
import HomePage from "./component/Github Profile/homepage";
import Profile from "./component/Github Profile/profile";
import RepoDetail from "./component/Github Profile/reposDetail";
import Following from "./component/Github Profile/following";
import Followers from "./component/Github Profile/followers";
import FormValidation from "./component/form/FormValidation";
import StopWatchByMe from "./component/To Do/toDoListBasic";
import Maiin from "./component/react-router/maiin";
import StopWatch5 from "./component/Stope Watch/StopWatch";
import ToDoMain from "./component/prectice/ToDo";
import StopWatch6 from "./component/prectice/stopWatch";
import Calculator from "./component/prectice/calculator";
// import Otp from "./component/prectice/ref/otp";
import ForwardRefExample from "./component/prectice/ForwardRef/ForwardRefExample";
import Parent from "./component/prectice/context/parent";
// import Home from "./component/mackbook/Home";
// import Standings from "./component/match/Standings";
import Registration from "./component/task/Registration";
import EmployeeList from "./component/task/EmployeeList";
import EditEmployee from "./component/task/EditEmployee";
import SearchFunction from "./component/task/SearchFunction";
import ShopKart from "./component/task2/ShopKart";
import Weather from "./IP/app/weather";
import Otp from "./IP/OTP/otp";
// import EditEmployee from "./component/task/editEmployee";
// import Home from "./IP/RPS/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/editEmployee/:id",
    element: <EditEmployee />,
  },
  {
    path: "/employeeList",
    element: <EmployeeList />,
  },
  // {
  //   path: "product-details/:meraProductId",
  //   element: <ProductDetails />,
  // },
  // {
  //   path: "/",
  //   element: <HomePage />,
  // },
  // {
  //   path: "profile/:id",
  //   element: <Profile />,
  // },
  // {
  //   path: "/reposDetail/:id/:Detail",
  //   element: <RepoDetail />,
  // },
  // {
  //   path: "/following/:id",
  //   element: <Following />,
  // },
  // {
  //   path: "/followers/:id",
  //   element: <Followers />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <RouterProvider router={router} /> */}
    <Otp />
  </>
);

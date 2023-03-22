import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import InputForm from "./form";
import FormValidation from "./form-validetion";
import ToDoList from "./component/todoList";
import FetchApi from "./component/fetch/FetchApi";

ReactDOM.createRoot(document.getElementById("root")).render(<FetchApi />);

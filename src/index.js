import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/index.css"; 

import Home from "./js/home.jsx";

//remember to use ReactDOM.render to include the component into the website
ReactDOM.render(<Home />, document.querySelector("#root"));




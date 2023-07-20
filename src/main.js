import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// import "antd/dist/antd.less";
//React 18
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

//react 17
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("app")
// );

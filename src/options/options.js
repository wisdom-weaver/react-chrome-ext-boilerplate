import React from "react";
import ReactDOM from "react-dom";
import "./options.css";
import icon from "../static/icon.png";

const App = () => {
  return (
    <div>
      <img src={icon} />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

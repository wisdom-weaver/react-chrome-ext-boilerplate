// TODO: content script
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  console.log("contentScript in App DOM")
  return (
    <div id="App">
      <h1>ContentScript writing on DOM</h1>
    </div>
  );
};
const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

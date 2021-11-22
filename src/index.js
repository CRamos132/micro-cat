import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.renderCats = (containerId, params) => {
  console.log("🚀 ~ params", params);
  ReactDOM.render(
    <App params={params} />,
    document.getElementById(containerId)
  );
};

window.unmountCats = (ref) => {
  ReactDOM.unmountComponentAtNode(ref);
};

if (!document.getElementById("Cats-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}

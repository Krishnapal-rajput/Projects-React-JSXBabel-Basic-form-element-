"use strict";

// const root = document.querySelector("#root");
// const h2 = React.createElement("h2", {}, "JSX x Babel!");
// ReactDOM.createRoot(root).render(h2);

var root = document.querySelector("#root");
var userName = "Krishnapal Rajput";
var form = /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", {
  htmlFor: "name"
}, "Username: "), /*#__PURE__*/React.createElement("input", {
  autoComplete: "off",
  type: "text",
  id: "name"
}), /*#__PURE__*/React.createElement("button", null, "Greet User"));
ReactDOM.createRoot(root).render(form);
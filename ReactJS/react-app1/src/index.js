import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import Abc from "./Abc";
import * as serviceWorker from "./serviceWorker";
import Sample from "./Sample";

ReactDOM.render(<Sample />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

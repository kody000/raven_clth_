import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import store from "./app/store.ts";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import App from "./App";

//const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));
//const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*root.render(
  <StrictMode>
    <App />
  </StrictMode>
);*/
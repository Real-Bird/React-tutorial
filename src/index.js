import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { createStore } from "redux";
import counter from "./components/testRedux/modules/counter";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(counter, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "states";

import RootRouter from "routers";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

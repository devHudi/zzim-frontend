import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import RootRouter from "routers";

ReactDOM.render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";

import { NesController } from "./lib/NesController";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <NesController scalePercentage={100} highlightOnTouch={true} />
  </div>
);


ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';
import './App.css';
import {defaultNesControllerProps, NesController} from "./components/NesController";

function App() {
  return (
    <div className="App">
      <NesController {...defaultNesControllerProps} />
    </div>
  );
}

export default App;

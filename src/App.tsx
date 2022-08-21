import React from 'react';
import './App.css';
import {defaultPlayer1Controller, NesController} from "./components/NesController";

function App() {
  return (
    <div className="App">
      <NesController {...defaultPlayer1Controller} />
    </div>
  );
}

export default App;

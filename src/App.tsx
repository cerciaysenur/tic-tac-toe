import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";
import Game from "./containers/Game";
function App() {
  return (
    <div className="App">
      <img
        className="companyImage"
        src={
          "https://fimple.co.uk/wp-content/uploads/2020/10/Fimple_Logo-white.png"
        }
      />
      <Game />
    </div>
  );
}

export default App;

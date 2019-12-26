import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Rooms from "./components/Rooms.js";

function App() {
  return (
    <div className="reservations">
      <h1>Check for reservations</h1>
      <Rooms />
    </div>
  );
}

export default App;

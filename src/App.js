import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Test1, STYLE } from "./components";
// import "./components";
// import { Test1, Test2 } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Test1 style={STYLE}></Test1>
      {/* <Test1></Test1>
      <Test2></Test2> */}
    </div>
  );
}

export default App;

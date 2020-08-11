import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() { 
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button> Hello react </button>
      <div>
        
        <p>hi</p>
      </div>
    </div>
  );
}

function Yo() {
  return <p>This is my first function in react</p>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
ReactDOM.render(<Yo />, rootElement);
ReactDOM.render()

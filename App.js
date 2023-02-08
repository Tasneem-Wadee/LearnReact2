import React from "react";
import "./styles.css";

//Default export from greeting.js
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
//import WeirdHello from "./components/Hello"

//names exports?? which are those
//import MyComponent from "./components/Greeting"

//the one below is if you export a specific function and not the default
//import { Greeting } from "./components/Greeting"
export default function App() {
  const name = "Tasneem";
  const x = 2;
  const y = 3;

  return (
    <div className="App">
      <Greeting planet="earth">
        <p> this is children props </p>
        <button> Humans login! </button>
      </Greeting>
      <div>
        <Greeting planet="mars">
          <button onClick="warning()"> Aliens login!! </button>
        </Greeting>
      </div>
      <h1>Hello {name} </h1>
      <p>
        Adding {y} to {x}...{" "}
      </p>
      <h3> Your Total is: {x + y}</h3>
      <Welcome />
      <Hello />
      {/* <WeirdHello/> */}
    </div>
  );
}

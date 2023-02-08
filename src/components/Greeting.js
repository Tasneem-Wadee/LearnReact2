import React from "react";

const h2Style = { color: "blue" };

const Greeting = (props) => {
  return (
    <div>
      <h2 style={h2Style}> Hello {props.planet} </h2>
      {props.children} <br />
      -----------------------------
    </div>
  );
};

export default Greeting;

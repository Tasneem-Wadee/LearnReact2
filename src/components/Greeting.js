//functional component

import React from "react";

const h2Style = { color: "blue" };

const Greeting = (planet) => {
  //orrrr const {planet} = props
  return (
    <div>
      <h2 style={h2Style}> Hello {planet} </h2>
      {props.children} <br />
     {/* 
      switch(props.planet){
        if(props.planet== 'earth'){
          var planet = 'earth';
        }
        else{
          
        }
        case :
        console.log("You live on earth");
        break;
        default:
        console.log("You live on another planet");
      }
      */}
      -----------------------------
    </div>
  );
};

export default Greeting

import React from "react";

const Hello = () => {
  return (
    <div className="dummyClass">
      <p> with jsx </p>
    </div>
  );
};
/*
const WeirdHello = () => {
  return React.createElement(
    'div', 
    //null, //object of key value pairs that will be applied to the element
    //example...id attribute
    {id:'Hello', className: 'dummyClass'},
    React.createElement('h1', null, 'without jsx'))
}*/
export default Hello;
//export default WeirdHello;

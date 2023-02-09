//class component

import React, { Component } from "react";

const pStyle = { color: "green" };
const h4Style = { color: "orange" };

class Welcome extends Component {
  render() {
    return (
      <div>
        <h4 style={h4Style}> {this.props.text} </h4>
        <h4 style={h4Style}> Are you a Human or Alien? </h4>
       
        
        <p style={pStyle}>
          Created class component. <br />
          Remember how the import changes and connect like we do functional.{" "}
          <br />
          ie. with the export{" "}
        </p>
      </div>
    );
  }
}

export default Welcome

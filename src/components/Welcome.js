import React, { Component } from "react";
const pStyle = { color: "green" };
class Welcome extends Component {
  render() {
    return (
      <p style={pStyle}>
        {" "}
        Created class component. <br />
        Remember how the import changes and connect like we do functional
        <br />
        ie. with the export{" "}
      </p>
    );
  }
}

export default Welcome;

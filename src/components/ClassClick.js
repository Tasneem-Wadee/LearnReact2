import React, { Component } from "react";


class ClassClick extends Component {
    
    warning(){
        console.log('button was clicked')
    alert("THE HUMANS ARE COMINGGGGG") ;
    }
  render() {
    return (
      <div>
        <h2> Hello Martians </h2>
        <button  onClick={this.warning}> Humans!! </button>
       
      </div>
    );
  }
}

export default ClassClick
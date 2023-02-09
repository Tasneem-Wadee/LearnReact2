import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        var n=0;
        this.state ={
              message: n
            }  
     }
     changeMessage(x){
          var x = this.x;
          
          this.setState({
            
             message: 'not yet working'
         })
     }
        
    render() {
        return(
            <div>
            <h1> {this.state.message}  </h1>
            <button onClick ={() => this.changeMessage(this.state.message)}> counter </button>
            </div>
        )
    }
 }
    
    


export default Message
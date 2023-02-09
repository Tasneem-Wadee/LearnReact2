import React, { Component } from "react";

class Counter extends Component {
  
  constructor(props){
      super(props)
          this.state= {
              count: 0
          }
      
  }
   increment(){
       this.setState((prevState, props) => ({
           count: prevState.count + 1
       }))
       console.log(this.state.count)
       {/*
       what does props do
       
       this.setState ({
           count: this.state.count + 1
       },() => {
           console.log('Callback value' ,this.state.count)
       } 
       ) 
       console.log(this.state.count)
       {/*
       without callback, this isn't updating in console, just on website
      */}
       
   }
  
  incrementTwo(){
      this.increment()
      this.increment()
      
  }
  
  
   render() {
            return (
                <div>
                  <div>  count {this.state.count}</div>
                  <button onClick ={()=> this.incrementTwo()} > Increment </button>
                </div>
            )
    }
}
    
export default Counter 
import React, { Component } from 'react'

export default class Intro extends Component {

    constructor(){
        super();
        this.state={
            name: "Intro",
            c:0
        }
    }

  render() {
    return (
     <div>
        <div>{this.props.email}</div>
      <div>{this.state.name}</div>
      <button onClick={()=>this.setState({name:"karan"})}>click me</button>

      <div>{this.state.c}</div>
      <button onClick={()=>this.setState({c:this.state.c+1})}>increment</button>
      </div>
    )
    
  }
}

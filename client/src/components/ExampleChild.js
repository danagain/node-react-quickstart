// This is an example child component going inside App.js

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class ExampleChild extends Component {
  
  constructor(){
    super();
    console.log('Child constructor');
  }
  
  //This hook will fire after the constructor & before the render
  //Only runs once on load
  componentWillMount(){
    console.log('Child componentWillMount');
  }

  //Render hook, takes the state and props and renders the componenet
  //Don't call get state in render
  render() {
    return (
      <div>
        child name: {this.props.name}; 
      </div>
    );
  }
}

export default ExampleChild;

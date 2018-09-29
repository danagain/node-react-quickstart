import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Import Componenets
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      //BrowserRouter is a wrapper componenet & acts as a wrapper div
       <BrowserRouter>
        <div>
        <Navigation />
              <Switch> 
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route component={Error}></Route>
              </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

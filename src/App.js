import React, { Component } from 'react';
import { Home, Unirse } from './pages'
import { Nav } from './layout'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './style.css';

class App extends Component {
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/unirse">
            <Unirse />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

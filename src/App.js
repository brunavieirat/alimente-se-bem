import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'


// import './App.css';
import Navbar from './components/navbar/index'

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        {/* <App /> */}
        <Navbar/>
        
        {/* <Switch>
            <Route exact path="/"  />
            <Route path="/"  />
            <Route path="/" />
            <Route path="/"  />
        </Switch> */}

      </BrowserRouter>
     
    );
  }
}

export default App;

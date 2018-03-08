import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import SimpleAppBar from './components/navbar/index'
// import Button from './components/button-search/buttonSearch'
// import Categoria from './components/categoria/categoria'


// import './App.css';
// import Navbar from './components/navbar/index'

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        {/* <App /> */}
        {/*<SimpleAppBar/>*/}
       
        
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

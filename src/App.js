<<<<<<< HEAD
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
=======
import React, { Component, Fragment } from 'react'
import FacebookButton from './components/Login/Login'
// import {Route } from 'react-router-dom'
// import Home from '../screens/Home'
// import Videos from '../screens/Videos'
// import News from '../screens/News'
// import Agenda from '../screens/Agenda'


// import './App.css';
import Navbar from './components/Navbar/Navbar'

class App extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<FacebookButton />
				{/* <Route exact path="/"  component={Home}/>
				<Route path="/videos" component={Videos}  />
				<Route path="/noticias" component={News} />
				<Route path="/agenda" component={Agenda} /> */}
			</Fragment>
		)
	}
>>>>>>> 58d7617d9aa101b905344051bca1dc1495cfcf45
}

export default App

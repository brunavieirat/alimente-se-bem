import React, { Component, Fragment } from 'react'
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
				{/* <Route exact path="/"  component={Home}/>
				<Route path="/videos" component={Videos}  />
				<Route path="/noticias" component={News} />
				<Route path="/agenda" component={Agenda} /> */}
			</Fragment>
		)
	}
}

export default App

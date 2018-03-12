import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Videos from './containers/Videos'
import Login from './containers/Login/Login'
import Forum from './containers/Forum/Forum'
// import NotFound from './containers/NotFound'
// import Home from '../screens/Home'
// import News from '../screens/News'
// import Agenda from '../screens/Agenda'

class App extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/"  component={Login}/>
					<Route path="/videos" component={Videos}  />
					<Route path="/forum" component={Forum}  />
					{/* <Route path="/noticias" component={News} />
				<Route path="/agenda" component={Agenda} /> */}
					{/* <Route path="*" component={NotFound}/> */}
				</Switch>
			</Fragment>
		)
	}
}

export default App
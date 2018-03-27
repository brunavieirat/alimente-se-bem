import React, { Component, Fragment } from 'react'

import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import Footer from '../src/components/Footer/Footer'
import Videos from './containers/Videos'
// import Login from './containers/Login/Login'
import Forum from './containers/Forum/Forum'
import News from './containers/News'
import Agenda from './containers/Agenda'
import Admin from './containers/Admin/Admin'
import SideMenu from './containers/Admin/SideMenu/SideMenu';
// import NotFound from './containers/NotFound'

class App extends Component {
	render() {
		return (
			<Fragment>

				{/*<Route path="/login"  component={Login}/>*/}
				{/* <Routes /> */}

				<Navbar />

				
				<Switch>
					{/* <Route exact path="/"  component={}/> */}
					<Route path="/videos" component={Videos}  />
					<Route path="/forum" component={Forum}  />
					<Route path="/noticias" component={News} />
					<Route path="/agenda" component={Agenda} />
					<Route path="/admin" component={Admin} />
					{/* <Route path="*" component={NotFound}/> */}
				</Switch>
				

			</Fragment>
		)
	}
}

export default App
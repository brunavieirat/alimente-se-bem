import React, { Component, Fragment } from 'react'
import { Route }  from 'react-router-dom'
import Login from './containers/Login/Login'
import Routes from './services/Routes'

class App extends Component {
	render() {
		return (
			<Fragment>
				<Route path="/login"  component={Login}/>
				<Routes />
			</Fragment>
		)
	}
}

export default App
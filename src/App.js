import React, { Component, Fragment } from 'react'
import Route from './services/Router'


import Login from './containers/Login/Login'

class App extends Component {
	render() {
		return (
			<Fragment>
				<Route path="/login"  component={Login}/>
				
			</Fragment>
		)
	}
}

export default App
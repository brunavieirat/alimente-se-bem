import React, { Component, Fragment } from 'react'
import DoLogin from '../../services/DoLogin'
import Routes from '../../services/Routes'


function DoTryLogin(props){
	if(props.isLogged){
		return <DoLogin />
	}
	return <Routes /> 
}

class Login extends Component{
	// componentWillMount(){
	// 	if(localStorage.getItem('isLogged'))
	// 	{
	// 		this.props.history.push('/Home')
	// 	}
	// }

	
	

	render(){
		return(
			<Fragment>
				<DoTryLogin isLogged={localStorage.getItem('isLogged')} />
			</Fragment>
		)
	}
}


export default Login

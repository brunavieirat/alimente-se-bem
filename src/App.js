import React, { Component, Fragment } from 'react'

import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import Footer from '../src/components/Footer/Footer'
import Videos from './containers/Videos'
// import Login from './containers/Login/Login'
// import Forum from './containers/Forum/Forum'
import ForumTopico from './containers/Forum/ForumTopico'
import News from './containers/News'
import Agenda from './containers/Agenda'
import Admin from './containers/Admin/Admin'
// import SideMenu from './containers/Admin/SideMenu/SideMenu';
// import NotFound from './containers/NotFound'


import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBcn7sDMwuqqporRgImO3f8txHtVurr80Q",
	authDomain: "alimente-se-bem-dc7c4.firebaseapp.com",
	databaseURL: "https://alimente-se-bem-dc7c4.firebaseio.com",
	storageBucket: "alimente-se-bem-dc7c4.appspot.com",
	};
	

firebase.initializeApp(config);

class App extends Component {

	state = {
		username: null
	  };
	
	  onFacebookLogin = (loginStatus, resultObject) => {
		if (loginStatus === true) {
		  this.setState({
			username: resultObject.user.name
		  });
		} else {
		  alert('Facebook login error');
		}
	  }
	  
	render() {

		const { username } = this.state;

		return (
			<Fragment>

				{/*<Route path="/login"  component={Login}/>*/}
				{/* <Routes /> */}

				<Navbar />
				{/* <SideMenu /> */}

				
				<Switch>
					{/* <Route exact path="/"  component={}/> */}
					<Route path="/videos" component={Videos}  />
					<Route path="/forum" component={ForumTopico}  />
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
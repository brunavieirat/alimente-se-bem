import React, {Fragment} from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../containers/Home'
import Videos from '../containers/Videos'

import Forum from '../containers/Forum/Forum'
import News from '../containers/News'
import Agenda from '../containers/Agenda'
// import NotFound from './containers/NotFound'
import Footer from '../components/Footer/Footer'

const routes = () => (
	<Fragment>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/videos" component={Videos}  />
			<Route path="/forum" component={Forum}  />
			<Route path="/noticias" component={News} />
			<Route path="/agenda" component={Agenda} />
			{/* <Route path="*" component={NotFound}/> */}
		</Switch>
		<Footer/>
	</Fragment>
)

export default routes
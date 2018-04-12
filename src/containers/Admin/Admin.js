import React, { Component, Fragment } from 'react'
import Videos from './Videos/Videos'
import Agenda from './Agenda/AdminAgenda'
import MyEditor from './Noticias/Noticias'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

import SideMenu from '../Admin/SideMenu/SideMenu'
import './Admin.css'
import AdminCategoria from './Categoria/AdminCategoria'
import Noticias from './Noticias/Noticias'
import Forum from '../Forum/Forum'
import Footer from '../../components/Footer/Footer'

class Admin extends Component {

	render() {

		return (
			<Fragment>
				<Switch>
					<Route exact path="/admin/"
						component={Videos} />
					<Route path="/admin/agenda"
						component={Agenda} />
					<Route path="/admin/noticias"
						component={Noticias} />
					<Route path="/admin/forum"
						component={Forum} />
				</Switch>

				<div className="admin">
					<div className="admin-body">
					</div>

					<div className="admin">
						<div className="admin-body">


						</div>
					</div>		</div>

				<Footer />

			</Fragment>
		)

	}
}

export default Admin

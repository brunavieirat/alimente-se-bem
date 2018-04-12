import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

import SideMenu from '../Admin/SideMenu/SideMenu'
import './Admin.css'
import AdminCategoria from './Categoria/AdminCategoria'
import Videos from './Videos/Videos'

import Agenda from './Agenda/Agenda'

import Noticias from './Noticias/Noticias'

import Forum from '../Forum/Forum'


class Admin extends React.Component {

  render() {

    return (
      <Fragment>
        <Switch>
        <Route exact path="/admin/videos"
          component={Videos} />
        <Route path="/admin/agenda"
          component={Agenda} />
        <Route path="/admin/noticias"
          component={Noticias} />
        <Route path="/admin/forum"
          component={Forum} />
</Switch>
        {/* <Route path="/admin/videos"
					component={Videos} /> */}

        <div className="admin">
          <div className="admin-body">
            
            
          </div>
        </div>


			</Fragment>
		)

	}
}

export default Admin

import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import SideMenu from './SideMenu/SideMenu'
import './Admin.css'
import AdminCategoria from './Categoria/AdminCategoria'
import Videos from './Videos/Videos'

import Agenda from './Agenda/AdminAgenda'

import MyEditor from './Noticias/Noticias'



class Admin extends React.Component {

  render() {
    
    return (
<Fragment>

  
				<Route path="/admin/videos"
					component={Videos} />
          <Route path="/admin/agenda"
					component={Agenda} />
					
      {/* <Route path="/admin/videos"
					component={Videos} /> */}

      <div className="admin">
       <div className="admin-body"> 
              <SideMenu />
              <div className="container">
        <Videos  /> 
          {/* <Agenda /> */}
  
        </div>
        </div>
      </div>


      </Fragment>
    )

  }
}

export default Admin;

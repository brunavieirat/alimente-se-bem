import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import SideMenu from '../Admin/SideMenu/SideMenu'

import AddTopico from './AddTopico'




class Admin extends React.Component {

  render() {
    
    return (
<Fragment>

   <div className="App">
    <SideMenu />

      <div className="container">
				<AddTopico />

        </div>
        </div>


      </Fragment>
    )

  }
}

export default Admin;

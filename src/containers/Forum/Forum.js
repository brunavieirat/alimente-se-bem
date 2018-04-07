import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import AddTopico from './AddTopico'




class Admin extends React.Component {

  render() {
    
    return (
<Fragment>

  
				<AddTopico />


      </Fragment>
    )

  }
}

export default Admin;

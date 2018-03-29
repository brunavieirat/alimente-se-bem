import React from 'react'
import axios from 'axios'
import SideMenu from './SideMenu/SideMenu'
import './Admin.css'
import AdminCategoria from './Category/AdminCategoria'
import Videos from './Videos/Videos'


class Admin extends React.Component {

  render() {
    
    return (
      <div className="admin">
       <div className="admin-body"> 
              <SideMenu />
              <div className="container">
        {/* <AdminCategoria  /> */}

        <Videos />

        
        </div>
        </div>
      </div>
    );
  }
}

export default Admin;

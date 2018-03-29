import React from 'react'
import axios from 'axios'
import SideMenu from './SideMenu/SideMenu'
import './Admin.css'
import AdminCategory from './Category/AdminCategory'
import Videos from './Videos/AddVideos'


class Admin extends React.Component {

  render() {
    
    return (
      <div className="admin">
       <div className="admin-body"> 
              <SideMenu />
              <div className="container">
        {/*<AdminCategory  />*/}

        <Videos />

        
        </div>
        </div>
      </div>
    );
  }
}

export default Admin;

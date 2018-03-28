import React from 'react'
import axios from 'axios'
import SideMenu from './SideMenu/SideMenu'
import './Admin.css';
import AdminCategory from './Category/AdminCategory'



class Admin extends React.Component {

  render() {
    
    return (
      <div className="admin">
       <div className="admin-body"> 
              <SideMenu />
              <div className="container">
        {/* <AdminCategory  /> */}

        
        </div>
        </div>
      </div>
    );
  }
}

export default Admin;

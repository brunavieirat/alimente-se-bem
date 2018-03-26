import React from 'react'
import axios from 'axios'
import SideMenu from './SideMenu/SideMenu'
import './Admin.css';
import AdminCategory from './Category/AdminCategory'



class Admin extends React.Component {

  render() {
    
    return (
      <div className="Admin">
              <SideMenu />
        <AdminCategory  />
      </div>
    );
  }
}

export default Admin;

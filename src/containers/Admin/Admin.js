import React from 'react';
import axios from 'axios';
import SideMenu from '../Admin/SideMenu/SideMenu';
import './Admin.css';



class Admin extends React.Component {
 

  render() {
    
    return (
      <div className="Admin">
        <SideMenu />
        
      </div>
    );
  }
}

export default Admin;

import React from 'react'
import './Agenda.css'

import { Tabs, Icon } from 'antd'
import 'antd/lib/tabs/style/css'

import AdminAgenda from './AdminAgenda'

import SideMenu from '../SideMenu/SideMenu'

const TabPane = Tabs.TabPane;
const Agenda = () =>{

    return (

        <div className="App">
        <SideMenu />
          <div className="container">
           
                <AdminAgenda />
        
          </div>
        </div>
      )



}

export default Agenda
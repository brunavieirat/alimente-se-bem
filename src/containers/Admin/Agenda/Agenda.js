import React from 'react'
import './Agenda.css'

import { Tabs, Icon } from 'antd'
import 'antd/lib/tabs/style/css'

const TabPane = Tabs.TabPane;
const AdminAgenda = () =>{

    return (

        <div className="App">
    
          <div className="container">
            <Tabs defaultActiveKey="2">
              <TabPane tab={<span><Icon type="apple" />Videos</span>} key="1">
                Agenda
        </TabPane>
              <TabPane tab={<span><Icon type="android" />Categorias</span>} key="2">
                Tag Agenda
              </TabPane>
            </Tabs>
          </div>
        </div>
      )



}

export default AdminAgenda
import React from 'react'
import { Tabs, Icon } from 'antd'
import 'antd/lib/tabs/style/css'

import Categorias from '../Category/AdminCategory'
import Videos from './AdminVideos'

const TabPane = Tabs.TabPane;



const AdminVideos = () => {


  return (

    <div className="App">

      <div className="container">
        <Tabs defaultActiveKey="2">
          <TabPane tab={<span><Icon type="apple" />Videos</span>} key="1">
            <Videos />
    </TabPane>
          <TabPane tab={<span><Icon type="android" />Categorias</span>} key="2">
            <Categorias />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default AdminVideos
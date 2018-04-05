import React, { Fragment } from 'react'
import { Tabs, Icon } from 'antd'
import 'antd/lib/tabs/style/css'

import Categorias from '../Categoria/AdminCategoria'
import AddVideos from './AdminVideos'
// import SideMenu from '../SideMenu/SideMenu'

// import Videos from '../../Videos'

const TabPane = Tabs.TabPane;



const AdminVideos = () => {


  return (

   
    <div className="App">
    {/* <SideMenu /> */}

      <div className="container">
        <Tabs defaultActiveKey="2">
          <TabPane tab={<span><Icon type="apple" />Videos</span>} key="1">
            {/* <AddVideos /> */}
            <AddVideos />
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
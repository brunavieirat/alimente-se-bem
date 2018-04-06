import React, {Fragment} from 'react'
// import './Agenda.css'

import { Tabs, Icon } from 'antd'
import 'antd/lib/tabs/style/css'

import AdminNoticia from './AdminNoticia'
import Categorias from '../Categoria/AdminCategoria'



const TabPane = Tabs.TabPane;
const AdminNoticias = () =>{

    return (
<Fragment>
{/*       
<AdminNoticia /> */}


    <div className="App">
    {/* <SideMenu /> */}

      <div className="container">
        <Tabs defaultActiveKey="2">
          <TabPane tab={<span>Noticias</span>} key="1">
            {/* <AddVideos /> */}
            <AdminNoticia />
    </TabPane>
          <TabPane tab={<span><Icon type="android" />Categorias</span>} key="2">
          <Categorias
            urlGet='Noticias?sort=-createdAt' 
            urlDelete='/Categorias_Noticias/Excluir'
            urlPost='/Categorias_Noticias/'
            urlPut='Categorias_Noticias/Atualizar'/>
          </TabPane>
        </Tabs>
      </div>
    </div>
      </Fragment>
      )



}

export default AdminNoticias
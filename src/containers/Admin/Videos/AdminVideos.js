import React, { Component } from 'react'
import { postFromAPI } from '../../../services/APIServices'

import AddVideos from './AddVideos'
import './AdminVideos.css'



class AdminVideos extends Component{

    state = {

        videos: [
            {
                titulo: '',
                descricao: '',
                url: '',
                valor: '',
                link_Externo: '',
                id_Cat_Videos: ''
            }
        ]
    }

onClickCad=(video)=>{
    postFromAPI('Videos/Cadastrar', video)
    .then(res=> alert('oooook'))
    .catch(error=> alert(error))
    console.log(this.state.videos)
}

    render(){
 
        return(

            <AddVideos onClickCad={this.onClickCad} />

        )

    }
}

export default AdminVideos
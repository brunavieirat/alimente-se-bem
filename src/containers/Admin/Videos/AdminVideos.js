import React, { Component } from 'react'
import { postFromAPI } from '../../../services/APIServices'

import AddVideos from './AddVideos'
import './AdminVideos.css'



class AdminVideos extends Component{

    state = {
                            
            videos: []
        
    }

onClickCad=(video)=>{    

    postFromAPI('Videos/Cadastrar', video)
    .then(res=> alert('Vídeo Cadastrado com Sucesso!'))
    .catch(error=> alert(error))
    //console.log(video)
}

    render(){

       
        return(

            <AddVideos onClickCad={this.onClickCad} />

        )

    }
}

export default AdminVideos
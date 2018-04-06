import React, { Component, Fragment } from 'react'
import { postFromAPI } from '../../../services/APIServices'

import AddVideos from './AddVideos'
import './AdminVideos.css'

import ListaVideos from './ListaVideos'



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
        const { videos } = this.state.videos

       
        return(
            <Fragment>

            <AddVideos onClickCad={this.onClickCad} />
            <ListaVideos
            videos={videos} 
            deleteByIndex={this.deleteByIndex}
            
            />
            </Fragment>
        )

    }
}

export default AdminVideos
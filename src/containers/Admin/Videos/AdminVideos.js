import React, { Component, Fragment } from 'react'
import getFromAPI, { postFromAPI, deleteFromAPI } from '../../../services/APIServices'

import AddVideos from './AddVideos'
import './AdminVideos.css'

import ListaVideos from './ListaVideos'



class AdminVideos extends Component{
    state={
        videos: []
      }
   
    
    refresh(){
        getFromAPI('Videos?sort=-createdAt')
        .then(res => {
            this.setState({
                ...this.state,
                videos: res.data,
                nome: ''                
        })
                
    })
    console.log(this.state.videos)
}

componentDidMount(){
    this.refresh()

}

deleteByIndex = id =>{
     
   
    deleteFromAPI('Videos/'+id)
    .then(resp => this.refresh())
    .catch(error => alert(error))
}
     

onClickCad=(video)=>{    

    postFromAPI('Videos/Cadastrar', video)
    .then(res=> alert('Vídeo Cadastrado com Sucesso!'))
    .catch(error=> alert(error))
    //console.log(video)
    
}

    render(){
        const { videos } = this.state

       
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
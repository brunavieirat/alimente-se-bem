import React, { Component, Fragment } from 'react'
import getFromAPI, { postFromAPI, deleteFromAPI } from '../../../services/APIServices'
import axios from 'axios'
import AddVideos from './AddVideos'
import './AdminVideos.css'

import ListaVideos from './ListaVideos'



class AdminVideos extends Component{
    state={
        videos: [],
        categorias: []
      }
   
    
    refresh(){
        getFromAPI('Videos?sort=-createdAt')
        .then(res => {
            this.setState({
                ...this.state,
                videos: res.data,
                              
        })
                
    })
  //  console.log(this.state.videos)
}

componentDidMount(){
    this.refresh()

    axios.get('http://renatafelix-001-site1.gtempurl.com/api/Categorias_Videos')
    .then(res=>{
        
        this.setState({
                    ...this.state,
                    categorias: res.data,
                    
        })
        console.log(this.state)
        
    })
    
}



deleteByIndex = id =>{
     
   
    axios.delete('http://renatafelix-001-site1.gtempurl.com/api/Videos/'+id)
    .then(resp => this.refresh())
    .catch(error => alert(error))
}
     

onClickCad=(video)=>{    

    postFromAPI('Videos/Cadastrar', video)
    .then(res=> alert('Vídeo Cadastrado com Sucesso!'))
    .catch(error=> alert(error))
  //  console.log(video)
    
}

    render(){
        const { videos, categorias } = this.state

       
        return(
            <Fragment>

            <AddVideos onClickCad={this.onClickCad}
            categorias={categorias}
            value="Cadastrar" />

            <ListaVideos
            videos={videos} 
            categorias={categorias}
            deleteByIndex={this.deleteByIndex}
            
            />
            </Fragment>
        )

    }
}

export default AdminVideos
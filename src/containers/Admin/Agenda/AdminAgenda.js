import React, { Component, Fragment } from 'react'
import getFromAPI, { postFromAPI } from '../../../services/APIServices'

import AddEventos from './AddEventos'
import ListaEventos from './ListaEventos'

import axios from 'axios'


class AdminAgenda extends Component{

    state = {

        eventos: []
    }

    
    refresh(){
        getFromAPI('Agenda?sort=-createdAt')
        .then(res => {
            this.setState({
                ...this.state,
                eventos: res.data,
                              
        })
                
    })
  //  console.log(this.state.videos)
}

componentDidMount(){
    this.refresh()
}

deleteByIndex = id =>{
     
   
    axios.delete('http://renatafelix-001-site1.gtempurl.com/api/Agenda/'+id)
    .then(resp => {
        alert("Vídeo excluído!")
        this.refresh()
    })
    .catch(error => alert(error))
}
     



onClickCad=(evento)=>{

    console.log(evento)
    postFromAPI('Agenda', evento)
    .then(res=> {
        alert('Evento cadastrado com Sucesso!')
        this.refresh()
    })
        .catch(error=> alert(error))
      
}

    render(){
        const { eventos } = this.state

        return(

             
             <Fragment>

             {/* <AddVideos onClickCad={this.onClickCad}
             categorias={categorias}
             value="Cadastrar" /> */}

             <AddEventos
             onClickCad={this.onClickCad}
             value="Cadastrar" />
 
             <ListaEventos
            eventos={eventos} 
            //  categorias={categorias}
             deleteByIndex={this.deleteByIndex}
             
             />

             </Fragment>
        )

    }
}

export default AdminAgenda
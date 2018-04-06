import React, { Component } from 'react'
import { postFromAPI } from '../../../services/APIServices'

import AddEventos from './AddEventos'




class AdminAgenda extends Component{

    state = {

        eventos: []
    }

onClickCad=(evento)=>{

    console.log(evento)
    postFromAPI('Agenda', evento)
    .then(res=> alert('Evento cadastrado com Sucesso!'))
    .catch(error=> alert(error))
      
}

    render(){
 
        return(

             <AddEventos 
             onClickCad={this.onClickCad} />

        )

    }
}

export default AdminAgenda
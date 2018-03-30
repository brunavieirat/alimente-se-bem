import React, { Component } from 'react'
import { postFromAPI } from '../../../services/APIServices'

import AddEventos from './AddEventos'
import './AdminAgenda.css'



class AdminAgenda extends Component{

    state = {

        eventos: [
            {
                titulo: '',
                descricao: '',
                data_Evento: '',
                valor: '',
                tag:'',
                id_unidade: ''
            }
        ]
    }

onClickCad=(evento)=>{
    postFromAPI('Agenda', evento)
    .then(res=> alert('oooook'))
    .catch(error=> alert(error))
    console.log(this.state.eventos)
}

    render(){
 
        return(

             <AddEventos onClickCad={this.onClickCad} />

        )

    }
}

export default AdminAgenda
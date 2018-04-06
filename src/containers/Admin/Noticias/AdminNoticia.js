import React, { Component } from 'react'
import { postFromAPI } from '../../../services/APIServices'

import AddNoticias from './AddNoticias'
import axios from 'axios'



class AdminNoticia extends Component{

    state = {

        noticias: []
    }

onClickCad=(noticia)=>{

    console.log(noticia)
    postFromAPI('Noticias/Cadastrar', noticia)
    .then(res=> alert('Notícia cadastrada com Sucesso!'))
    .catch(error=> alert(error))
      
}

    render(){
 
        return(

             <AddNoticias
             onClickCad={this.onClickCad} />

        )

    }
}

export default AdminNoticia
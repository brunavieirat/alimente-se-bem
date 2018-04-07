import React, { Component, Fragment } from 'react'
import getFromAPI, { postFromAPI, putFromAPI, deleteFromAPI } from '../../../services/APIServices'
import ListaNoticias from './ListaNoticias'

import AddNoticias from './AddNoticias'
import axios from 'axios'



class AdminNoticia extends Component{
    state = {
        noticias: [],
        categorias: []
    }
  
    
    refresh(){
        getFromAPI('Noticias?sort=-createdAt')
        .then(res => {
            this.setState({
                ...this.state,
                noticias: res.data,
                              
        })
                
    })
    
}




componentDidMount(){
   this.refresh()

    getFromAPI('/Categorias_Noticias')
    .then(res=>{
        console.log(res.data)
        
        this.setState({
                    ...this.state,
                    categorias: res.data,
                    
        })
      //  console.log(this.state)
    })
    
    
}


deleteByIndex = id =>{
     
   
    deleteFromAPI('/Noticias/Excluir/'+id)
    .then(resp => this.refresh())
    .catch(error => alert(error))
}



onClickCad=(noticia)=>{

    //console.log(noticia)
    postFromAPI('Noticias/Cadastrar', noticia)
    .then(res=> alert('Notícia cadastrada com Sucesso!'))
    .catch(error=> alert(error))
      
}

    render(){
        const { noticias, categorias } = this.state
        return(
<Fragment>
             <AddNoticias
             onClickCad={this.onClickCad}
             categorias={categorias}
             value="Cadastrar" />

             <ListaNoticias
            noticias={noticias} 
            categorias={categorias}
            deleteByIndex={this.deleteByIndex}
            
            />

            </Fragment>
        )

    }
}

export default AdminNoticia
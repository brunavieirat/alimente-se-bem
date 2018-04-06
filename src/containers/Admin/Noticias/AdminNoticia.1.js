import React, { Component } from 'react'
import getFromAPI, { postFromAPI } from '../../../services/APIServices'

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

    axios.get('http://renatafelix-001-site1.gtempurl.com/api/Categorias_Noticias')
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
     
   
    axios.delete('http://renatafelix-001-site1.gtempurl.com/api/Noticias/Excluir/'+id)
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

             <AddNoticias
             onClickCad={this.onClickCad}
             categorias={categorias} />

            //  <ListaNoticias
            // noticias={noticias} 
            // categorias={categorias}
            // deleteByIndex={this.deleteByIndex}
            
            // />
        )

    }
}

export default AdminNoticia
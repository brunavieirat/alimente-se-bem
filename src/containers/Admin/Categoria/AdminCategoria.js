import React from 'react'
import AddCategoria from './AddCategoria'
import ListaCategoria from './ListaCategoria'
import getFromAPI, { postFromAPI, deleteFromAPI } from '../../../services/APIServices'
import './AdminCategoria.css'

import axios from 'axios'

class AdminCategoria extends React.Component{
    state={
        nome: '',
          categorias: []
      }
   
    
    refresh(){
        getFromAPI('Categorias_Videos?sort=-createdAt')
        .then(res => {
            this.setState({
                ...this.state,
                categorias: res.data,
                nome: ''                
        })
                
    })
}

componentDidMount(){
    this.refresh()

}

deleteByIndex = id =>{
     
    const { categorias } = this.state;
    // 
    deleteFromAPI('http://renatafelix-001-site1.gtempurl.com/api/Categorias_Videos/'+id)
    .then(resp => this.refresh())
    .catch(error => alert(error))
}

edit = (categoria) => {

    console.log('editAdmin ok')
}


     onClickCad=(categoria)=>{
     postFromAPI('/Categorias_Videos/Cadastrar', categoria)
     .then(res=> this.refresh())
     .catch(error=>alert(error))
    
     }

   render(){

    const {categorias} = this.state
    
    return(
        <div className="App">

<div className="container">
    
        <AddCategoria onClickCad={this.onClickCad}  />
      {/* <ListCategory categorias={this.state.categorias}/> */}
    <ListaCategoria categorias={categorias} deleteByIndex={this.deleteByIndex} refresh={this.refresh} />

    {/*<button onclick={this.removeItem()}> Excluir </button>*/}
        </div>
        </div>
    )
}
}

export default AdminCategoria
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
        getFromAPI(this.props.urlGet)
        .then(res => {
            this.setState({
                ...this.state,
                categorias: res.data,
                nome: ''                
        })
                
    })
}

componentWillMount(){
    this.refresh()

}

deleteByIndex = id =>{
     
    deleteFromAPI(this.props.urlDelete+id)
    .then(resp => this.refresh())
    .catch(error => alert(error))
}



     onClickCad=(categoria)=>{
     postFromAPI( this.props.urlPost, categoria)
     .then(res=> {

        alert('Categoria cadastrada com sucesso!')
         this.refresh()
                
        })
     .catch(error=>alert(error))
     
     }

     
      

   render(){

    const {categorias} = this.state
    
    return(
        <div className="App">

<div className="container">
    
        <AddCategoria 
        onClickCad={this.onClickCad}
         value="Cadastrar" 
         onClickEdit={this.state.categorias}/>
      {/* <ListCategory categorias={this.state.categorias}/> */}
    <ListaCategoria 
    categorias={categorias} 
    deleteByIndex={this.deleteByIndex}
    urlPut={this.props.urlPut}
    
    />

    {/*<button onclick={this.removeItem()}> Excluir </button>*/}
        </div>
        </div>
    )
}
}

export default AdminCategoria
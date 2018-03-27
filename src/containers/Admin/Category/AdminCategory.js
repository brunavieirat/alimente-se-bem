import React from 'react'
import AddCategory from './AddCategory'
import ListCategory from './ListCategory'
import getFromAPI, { postFromAPI } from '../../../services/APIServices'
import './AdminCategory.css'

import axios from 'axios'

class AdminCategory extends React.Component{
    state={
        nome: '',
          categorias: []
      }
   
    
    refresh(){
        getFromAPI('/Categorias_Videos?sort=-createdAt')
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
     
// removeItem= (cat) =>{
 
//     axios.delete('http://renatafelix-001-site1.gtempurl.com/api/Categorias_Videos/Excluir/1')
//     .then(resp => this.refresh())
//     .catch(error => alert(error))
// }
   
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
    
        <AddCategory onClickCad={this.onClickCad}  />
      {/* <ListCategory categorias={this.state.categorias}/> */}
    <ListCategory categorias={categorias} />

    {/*<button onclick={this.removeItem()}> Excluir </button>*/}
        </div>
        </div>
    )
}
}

export default AdminCategory
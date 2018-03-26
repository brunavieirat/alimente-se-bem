import React from 'react'
import AddCategory from '../Category/AddCategory'
import getFromAPI, { postFromAPI } from '../../../services/APIServices'

class AdminCategory extends React.Component{
    state={
    
            nome: ''
      }
   
    
   
   onChangeCat=(e)=>{
     this.setState({
       nome: e.target.value
     })
    
    }
   
     onClickCad=(e)=>{
      const {nome} = this.state
      
      postFromAPI('/Categorias_Videos/Cadastrar', {nome})
     .then(res=>alert('cadastro ok'))
     .catch(error=>alert(error))
     }
   render(){
    return(

        <AddCategory onClickCad={this.onClickCad} onChangeCat={this.onChangeCat} />
    )
}
}

export default AdminCategory
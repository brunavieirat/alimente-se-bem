import React from 'react'
import AddCategory from './AddCategory'
import ListCategory from './ListCategory'
import getFromAPI, { postFromAPI } from '../../../services/APIServices'

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
   
   onChangeCat=(e)=>{
     this.setState({
         ...this.state,
       nome: e.target.value
     })
    
    }
   
     onClickCad=(e)=>{
      const {nome} = this.state
      
      postFromAPI('/Categorias_Videos/Cadastrar', {nome})
     .then(res=> this.refresh())
     .catch(error=>alert(error))
     }

   render(){

    const {categorias} = this.state
    
    return(

<div>
        <AddCategory onClickCad={this.onClickCad} onChangeCat={this.onChangeCat} />
      {/* <ListCategory categorias={this.state.categorias}/> */}
    <ListCategory categorias={categorias} />
        </div>
    )
}
}

export default AdminCategory
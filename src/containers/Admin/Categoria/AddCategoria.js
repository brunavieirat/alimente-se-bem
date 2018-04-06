import React from 'react'
import './AddCategoria.css'


class AddCategoria extends React.Component{

state={
    categoria: {

        nome: ''
    }

}

onSubmit = (e) => {
    e.preventDefault()
    this.props.onClickCad(this.state.categoria)
    
   
}

onChangeCat=(e)=>{
    this.setState({
        categoria:{
        ...this.state.categoria,
      nome: e.target.value
        }
    })
    // console.log(this.state.categoria)
  
   }
render(){
    return(

        <div className="card row -justify-center -align-center CategoryForm">
        <form className="row" onSubmit={this.onSubmit}>
        <div className="form-group">
        <label> Categorias </label>
        <input type="text" required="required" value={this.state.nome} onChange={this.onChangeCat}/>
        </div>
        <button className="btn-add">{this.props.value} </button>
        
        </form>
        </div>
    )
}
}
export default AddCategoria
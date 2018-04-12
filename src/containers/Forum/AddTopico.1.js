import React from 'react'
import './AddTopico.css'
import ForumTopico from './ForumTopico'



class AddTopico extends React.Component{

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
      [e.target.getAttribute('name')]: e.target.value
        }
    })
   
   }

   renderInput(){
    return(

        // console.log('entrou')
    // <input type="text" />
    <ForumTopico />
    // console.log('passou pelo input')
    )
   }
   
  handleKeyPress=(e)=> {
    if (e.key === 'Enter') {
        {this.renderInput()}
      
    }
  }

  
render(){

    return(

        <section className="forum-topico">

        <label> Título </label>

        <input type="text" />
        <label> Descrição </label>

        <textarea className="forum-topico__respUserTextarea">

</textarea>

<label> Tags </label>

<input id="enter" type="text"  onKeyPress={this.handleKeyPress}/>

   


    </section>
    )
}
}
export default AddTopico
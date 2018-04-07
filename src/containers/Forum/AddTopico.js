import React, { Component } from 'react'
import axios from 'axios'



class AddTopico extends Component {

    state = {
        topico: {
            titulo: '',
            descricao: '',
            id_Nutricionista: 3,
            id_Cat_Forum: 1,
            data_Criacao: '2018-04-05',
            tags: ''
        }
    }

                
    onChange = (e) => {
        this.setState({
            topico: {
                ...this.state.topico,
                [e.target.getAttribute('name')]: e.target.value,
               
                
            }           
            
        })
      
    }

onSubmit = (e) =>{
 e.preventDefault()
 //this.props.onClickCad(this.state.video)

 axios.post('http://renatafelix-001-site1.gtempurl.com/api/Forum', this.state.topico)
 .then(res=>console.log('oook'))
 .catch(error=>console.log(error))
 console.log(this.state)
 }



    render() {

         const { onChange} = this
         const {titulo, descricao } = this.state.topico

        return (
            
            <section className="forum-topico">
            <form className="row" onSubmit={this.onSubmit}>
            <div className="form-group">
        <label> Título </label>

        <input type="text" name="titulo" onChange={onChange} />
        <label> Descrição </label>

        <textarea name="descricao" onChange={onChange} className="forum-topico__respUserTextarea">

</textarea>

<label> Tags </label>

<input name="tags" type="text" onChange={onChange}/>

<button className="btn-add"> Publicar </button>
</div>
   </form>


    </section>
            
        )

    }
}

export default AddTopico
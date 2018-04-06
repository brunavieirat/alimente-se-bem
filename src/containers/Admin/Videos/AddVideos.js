import React, { Component } from 'react'
import axios from 'axios'

import './AddVideos.css'



class AddVideos extends Component {

    state = {
        video: {
            titulo: '',
            descricao: '',
            url: '',
            link_Externo: '',
            id_Cat_Videos: '',
            nome_Cat: ''
        }
    }

                
    onChange = (e) => {
        this.setState({
            video: {
                ...this.state.video,
                [e.target.getAttribute('name')]: e.target.value,
               
                
            }
            
        })
       
    }

onSubmit = (e) =>{
 e.preventDefault()
 this.props.onClickCad(this.state.video)
 //console.log("video" +this.state.video)
 }


listaCategoria(){

    const {categorias} = this.props
  //  console.log(categorias)

    return categorias.map((categoria) => {
         
        return (
         <option
         
         key={categoria.id}
         
         value={categoria.id}> {categoria.nome}</option>

                 )


     })
 
}


    render() {

         const { onChange} = this
         const {titulo, descricao } = this.state.video

        return (
            

            <div className="card row -justify-center -align-center CategoryForm">
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <label> Título </label>
                        <input type="text" name="titulo" required="required" value={titulo} onChange={onChange} />

                        <label> Descrição </label>
                        <textarea name="descricao" required="required" value={descricao} onChange={onChange} />

                        {/* // <label> Valor </label> */}
                        {/* // <input type="text" name="valor"  onChange={onChangeVideo} /> */}

                        <label> URL Vídeo</label>
                        <input type="text" name="url" required="required" onChange={onChange} />

                        <label> Link Externo para maiores informações </label>
                        <input type="text" name="link_Externo"  onChange={onChange} />
                        <label> Selecione a categoria </label>

                        {/* <input type="text" name="id_categoria" required="required" onChange={onChangeVideo} /> */}
                        <select name="id_Cat_Videos"  onChange={onChange} required="required"> 
                        <option> Selecione uma categoria </option>

                        {this.listaCategoria()}

                        </select>
                    </div>
                    <button className="btn-add">Cadastrar </button>

                </form>
            </div>
            
        )

    }
}

export default AddVideos
import React, { Component } from 'react'
import axios from 'axios'

import './AddVideos.css'



class AddVideos extends Component {

    state = {
        video:{}
        // video: {
        //     titulo: '',
        //     descricao: '',
        //     url: '',
        //     link_Externo: '',
        //     id_Cat_Videos: '',
        //     nome_Cat: ''
        // }
    }

    componentDidMount(){

        const {id, titulo, descricao, url, link_Externo, id_Cat_Videos } = this.props;

        this.setState({
            video:{
                id: id,
                titulo: titulo,
                descricao:descricao,
                url: url,
                link_Externo: link_Externo,
                id_Cat_Videos: id_Cat_Videos
            }
        })
       // console.log(this.state)
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
    const {titulo, descricao, url, link_Externo, id_Cat_Videos } = this.props;
  //  const {video} = this.props.video
 e.preventDefault()
 this.props.onClickCad(this.state.video)
 
 
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
         const {titulo, descricao, url, link_Externo, id_Cat_Videos } = this.props;

        return (
            

            <div className="card row -justify-center -align-center StudentForm">
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <label> Título </label>
                        <input type="text" name="titulo" required="required" defaultValue={titulo}  onChange={onChange} />

                        <label> Descrição </label>
                        <textarea name="descricao" required="required" defaultValue={descricao} onChange={onChange} />

                        {/* // <label> Valor </label> */}
                        {/* // <input type="text" name="valor"  onChange={onChangeVideo} /> */}

                        <label> URL Vídeo</label>
                        <input type="text" name="url" required="required" defaultValue={url} onChange={onChange} />

                        <label> Link Externo para maiores informações </label>
                        <input type="text" name="link_Externo" defaultValue={link_Externo}  onChange={onChange} />
                        <label> Selecione a categoria </label>

                        {/* <input type="text" name="id_categoria" required="required" onChange={onChangeVideo} /> */}
                        <select name="id_Cat_Videos"  onChange={onChange} defaultValue={id_Cat_Videos} required="required"> 
                        <option> Selecione uma categoria </option>

                        {this.listaCategoria()}

                        </select>
                    </div>
                    <button className="btn-add">{this.props.value} </button>

                </form>
            </div>
            
        )

    }
}

export default AddVideos
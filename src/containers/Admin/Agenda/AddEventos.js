import React, { Component } from 'react'

import axios from 'axios'
import './AddEventos.css'

import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';


class AddEventos extends Component {

    state = {
        evento: {            
            // url_Imagem:'',
            // image:'',
            // titulo: '',
            // descricao: '',
            // data_Evento: '',
            // valor: '',
            // tag:''
            
        },
        
        unidades: []

    }

    componentDidMount(){

        const {id, titulo, valor, url_Imagem, image, descricao, data_Evento, tag } = this.props;

        this.setState({
            evento:{
                id: id,
                titulo: titulo,
                descricao:descricao,
                url_Imagem: url_Imagem,
                descricao: descricao,
                data_Evento: data_Evento,
                tag: tag,
                valor: valor
            }
        })
    }

    componentWillMount(){
        
        axios.get('http://renatafelix-001-site1.gtempurl.com/api/Unidades_Sesi')
        .then(res=>{
            
            this.setState({
                        ...this.state,
                        unidades: res.data,
                        
            })
           
        })
                

    }



    listaUnidades(){

       return this.state.unidades.map((unidade) => {
            
           return (
            <option
            
            key={unidade.id}
            
            value={unidade.id}> {unidade.nome}</option>
           )

 
        })
    
}

    onChange = (e) => {
        this.setState({
            evento: {
                ...this.state.evento,
                [e.target.getAttribute('name')]: e.target.value,
               
            }
        })
       // console.log(e.target.name, e.target.value)
    }

onSubmit = (e) =>{
 e.preventDefault()
 this.props.onClickCad(this.state.evento)
 //console.log(this.state.evento)
}

 handleUploadSuccess = (filename, { snapshot }, b) => {
        this.setState({ 
           evento:{
               image: filename
           }
          
        });
       // console.log('filename ' + filename, snapshot.downloadURL)

        firebase.storage().ref('images').child(filename).getDownloadURL()
        .then(
            this.setState({
                evento: {
                url_Imagem: snapshot.downloadURL
                }
            })
           
        //     url => this.setState({ 
        //     imageURL: url 
        // })
        );
      
    };

    render() {

         const { onChange} = this
        const { url_Imagem } = this.state.evento
        const {id_uni, nome}=this.state.unidades

        const {id, titulo, image, valor, descricao, data_Evento, tag } = this.props;
        return (
            

            <div className="card row -justify-center -align-center CategoryForm">
            
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <h1> Agenda </ h1>

                            <label>Imagem:</label>

                            {url_Imagem &&
                        <img src={url_Imagem} className="cardEvent-img"/>
                    }

                    <FileUploader
                        accept="image/*"
                        name="image"
                        randomizeFilename
                        storageRef={firebase.storage().ref('images')}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        required="required"
                      
                    />
                    
                    

                        <label> Título </label>
                        <input type="text" name="titulo" required="required" defaultValue={titulo} onChange={onChange} />

                        <label> Descrição </label>
                        <textarea name="descricao" required="required" defaultValue={descricao} onChange={onChange} />

                        <label> Data do Evento</label>
                        <input type="date" name="data_Evento" required="required" defaultValue={data_Evento} pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min="2012-01-01" max="2154-02-18" onChange={onChange} />

                        <label> Valor </label>
                        <input type="text" name="valor" required="required" defaultValue={valor} pattern="[0-9]+$" onChange={onChange} />

                        
                        <label> Tag </label>
                        <input type="text" name="tag" defaultValue={tag} onChange={onChange} />

                        



                        <label> Selecione a Unidade </label>
                        {/* <input type="text" name="id_unidade" required="required" onChange={onChangeVideo} /> */}
                        <select name="id_unidade"  onChange={onChange} defaultValue={id_uni} required="required"> 
                        <option> Selecione uma Unidade </option>

                        {this.listaUnidades()}

                        </select>

                    </div>
                    <button className="btn-add">Cadastrar </button>

                </form>
            </div>
        )

    }
}

export default AddEventos
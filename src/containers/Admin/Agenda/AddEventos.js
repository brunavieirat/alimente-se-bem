import React, { Component } from 'react'


import './AddEventos.css'

import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';


class AddEventos extends Component {

    state = {
        evento: {            
            url_Imagem:'',
            image:'',
            titulo: '',
            descricao: '',
            data_Evento: '',
            valor: '',
            tag:'',
            id_Unidade: ''
        },
        

    }
    onChangeVideo = (e) => {
        this.setState({
            evento: {
                ...this.state.evento,
                [e.target.getAttribute('name')]: e.target.value
            }
        })
        //console.log(this.state.evento)
    }

onSubmit = (e) =>{
 e.preventDefault()
 this.props.onClickCad(this.state.evento)
 
}

 handleUploadSuccess = (filename, { snapshot }, b) => {
        this.setState({ 
           evento:{
               image: filename
           }
          
        });
        console.log('filename ' + filename, snapshot.downloadURL)

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
        console.log('imageURL: '+ this.state.url_Image)
    };

    render() {

         const { onChangeVideo} = this
        const { imageUrl } = this.state.evento

        return (

            <div className="card row -justify-center -align-center CategoryForm">
            
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <h1> Agenda </ h1>

                            <label>Imagem:</label>

                            {imageUrl &&
                        <img src={imageUrl} />
                    }

                    <FileUploader
                        accept="image/*"
                        name="image"
                        randomizeFilename
                        storageRef={firebase.storage().ref('images')}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                      
                    />
                    
                    

                        <label> Título </label>
                        <input type="text" name="titulo" required="required" onChange={onChangeVideo} />

                        <label> Descrição </label>
                        <textarea name="descricao" required="required" onChange={onChangeVideo} />

                        <label> Data do Evento</label>
                        <input type="date" name="data_Evento" required="required"  pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min="2012-01-01" max="2154-02-18" onChange={onChangeVideo} />

                        <label> Valor </label>
                        <input type="text" name="valor" required="required" pattern="[0-9]+$" onChange={onChangeVideo} />

                        
                        <label> Tag </label>
                        <input type="text" name="tag"  onChange={onChangeVideo} />

                        <label> Id Unidade </label>
                        <input type="text" name="id_Unidade" required="required" onChange={onChangeVideo} />

                    </div>
                    <button className="btn-add">Cadastrar </button>

                </form>
            </div>
        )

    }
}

export default AddEventos
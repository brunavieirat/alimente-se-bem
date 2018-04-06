import React, { Component } from 'react'




import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';


class AddNoticias extends Component {

    state = {
        noticia: {            
            titulo: '',
            headline: '',
            descricao: '',
            imagem:'',
            link_externo: '',
            id_Cat_Noticias:''
        },
        

    }
    onChangeVideo = (e) => {
        this.setState({
            noticia: {
                ...this.state.noticia,
                [e.target.getAttribute('name')]: e.target.value
            }
        })
        //console.log(this.state.evento)
    }

onSubmit = (e) =>{
 e.preventDefault()
 this.props.onClickCad(this.state.noticia)
 
}

 handleUploadSuccess = (filename, { snapshot }, b) => {
        this.setState({ 
           noticia:{
               image: filename
           }
          
        });
        console.log('filename ' + filename, snapshot.downloadURL)

        firebase.storage().ref('images').child(filename).getDownloadURL()
        .then(
            this.setState({
                noticia: {
                imagem: snapshot.downloadURL
                }
            })
           
        //     url => this.setState({ 
        //     imageURL: url 
        // })
        );
       
    };

    render() {

         const { onChangeVideo} = this
        const { imagem } = this.state.noticia

        return (

            <div className="card row -justify-center -align-center CategoryForm">
            
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <h1> Notícia </ h1>

                            <label>Imagem:</label>

                            {imagem &&
                        <img src={imagem} />
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

                        <label> HeadLine </label>
                        <textarea name="headline" required="required" onChange={onChangeVideo} />

                        <label> Descrição </label>
                        <textarea name="descricao" required="required" onChange={onChangeVideo} />

                        
                        
                        <label> Link Externo </label>
                        <input type="text" name="link_externo"  onChange={onChangeVideo} />

                        <label> Id Categoria  </label>
                        <input type="text" name="id_Cat_Noticias" required="required" onChange={onChangeVideo} />

                    </div>
                    <button className="btn-add">Cadastrar </button>

                </form>
            </div>
        )

    }
}

export default AddNoticias
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
            link_Externo: '',
            id_Cat_Noticias:''
        }
        

    }

    listaCategoria(){

        const {categorias} = this.props
       // console.log(categorias)
    
        return categorias.map((categoria) => {
             
            return (
             <option
             
             key={categoria.id}
             
             value={categoria.id}> {categoria.nome}</option>
    
                     )
    
    
         })
     
    }
    onChange = (e) => {
        this.setState({
            noticia:{
                ...this.state.noticia,
                [e.target.getAttribute('name')]: e.target.value
            //    titulo: e.target.value
            }
        })
        console.log(this.state)
    }

onSubmit = (e) =>{
 e.preventDefault()
 this.props.onClickCad(this.state.noticia)
 
}

 handleUploadSuccess = (filename, { snapshot }, b) => {
        this.setState({ 
           noticia:{
               imagem: filename
           }
          
        });
    //    console.log('filename ' + filename, snapshot.downloadURL)

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

         const {onChange} = this
        const { imagem } = this.state.noticia

        return (

            <div className="card row -justify-center -align-center CategoryForm">
            
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <h1> Notícia </ h1>

                            <label>Imagem:</label>

                            {imagem &&
                        <img src={imagem} className="cardEvent-img"/>
                    }

                    <FileUploader
                        accept="image/*"
                        name="imagem"
                        randomizeFilename
                        storageRef={firebase.storage().ref('images')}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                       
                      
                    />
                    
                    

                        <label> Título </label>
                        <input type="text" name="titulo" required="required" onChange={onChange} />

                        <label> HeadLine </label>
                        <textarea name="headline" required="required" onChange={onChange} />

                        <label> Descrição </label>
                        <textarea name="descricao" required="required" onChange={onChange} />

                        
                        
                        <label> Link Externo </label>
                        <input type="text" name="link_Externo"  onChange={onChange} />

                        {/* <label> Id Categoria  </label>
                        <input type="text" name="id_Cat_Noticias" required="required" onChange={onChange} /> */}
                        
                        <label> Selecione a categoria </label>

                        <select name="id_Cat_Noticias"  onChange={onChange} required="required"> 
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

export default AddNoticias
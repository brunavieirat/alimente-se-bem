import React, { Component } from 'react'




import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';


class AddNoticias extends Component {

    state = {
        noticia: {            
            
        }
        

    }

    componentDidMount(){

        const {id, titulo, headline, descricao, imagem, link_Externo, id_Cat_Noticias } = this.props;

        this.setState({
            noticia:{
                id: id,
                titulo: titulo,
                headline: headline,
                descricao:descricao,
                imagem: imagem,
                link_Externo: link_Externo,
                id_Cat_Noticias: id_Cat_Noticias
            }
        })
       // console.log(this.state)
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

       const {titulo, descricao, headline, link_Externo, id_Cat_Noticias } = this.props;
       

        return (

            <div className="card row -justify-center -align-center StudentForm">
            
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">
                    {/* <h1> Notícia </ h1> */}

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
                        required="required"
                        
                               />
                               
                    

                        <label> Título </label>
                        <input type="text" name="titulo" required="required" defaultValue= {titulo} onChange={onChange} />

                        <label> HeadLine </label>
                        <textarea name="headline" required="required" defaultValue={headline} onChange={onChange} />

                        <label> Descrição </label>
                        <textarea name="descricao" required="required" defaultValue={descricao} onChange={onChange} />

                        
                        
                        <label> Link Externo </label>
                        <input type="text" name="link_Externo" defaultValue={link_Externo} onChange={onChange} />

                        {/* <label> Id Categoria  </label>
                        <input type="text" name="id_Cat_Noticias" required="required" onChange={onChange} /> */}
                        
                        <label> Selecione a categoria </label>

                        <select name="id_Cat_Noticias"  onChange={onChange} defaultValue={id_Cat_Noticias}required="required"> 
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

export default AddNoticias
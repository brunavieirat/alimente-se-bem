import React, { Component, Fragment } from 'react'

import { Modal } from 'antd'
import 'antd/lib/modal/style/css'
import AddNoticias from './AddNoticias'

// import getFromAPI, { postFromAPI, deleteFromAPI} from '../../../services/APIServices'
import axios from 'axios'

class LinhaNoticia extends Component {
    state = {
        visible: false,
        noticia: {
            id: this.props.id,
            titulo: this.props.titulo,
            descricao: this.props.descricao,
            imagem: this.props.imagem,
            link_Externo: this.props.link_Externo,
            id_Cat_Noticias: this.props.id_Cat_Noticias,
            
        }
            
    }
        
    

    showModal = () => {
        this.state.visible = true;
        this.setState({
            visible: true,
        });
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    handleOk = () => {
        this.setState({
            visible: false,
        });
    }



    onClick = (e) => {
        const { deleteByIndex } = this.props

        if (window.confirm("Deseja Excluir?"))
        {
            deleteByIndex(this.props.id)
           // e.preventDefault();
        }
        
        e.preventDefault()
       // deleteByIndex(this.props.id)
    }
    onClickEdit=(noticias)=>{
        
               
        axios.put('http://renatafelix-001-site1.gtempurl.com/api/Noticias/Atualizar', noticias)
        .then(res=> alert('Vídeo Editado com Sucesso!'))
        .catch(error=>alert(error))    
        
        
        
   
    // console.log(teste)
  
    }

    render() {
         
        return (

            <Fragment>
              

                <tr>
                    <td>
                        <label> {this.props.id} </label>
                    </td>
                    <td>
                        <label> {this.props.descricao} </label>
                    </td>
                    <td>
                        <label> {this.props.url} </label>
                    </td>
                    <td>
                        <label> {this.props.link_Externo} </label>
                    </td>
                   
                    <td>
                        <button className="btn-edit" onClick={this.showModal} > Editar</button>
                    </td>
                    <td>
                        <button className="btn-remove" onClick={this.onClick}>×</button>
                    </td>
                    
                </tr>

                <Modal
                    wrapClassName="modal"
                    title={this.props.title}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    okText="Editar"
                    onCancel={this.handleCancel}
                    
                >
                    
            <AddNoticias value="Editar" 
             id= {this.props.id}
             titulo= {this.props.titulo}
             descricao= {this.props.descricao}
             imagem= {this.props.imagem}
             link_Externo= {this.props.link_Externo}
             id_Cat_Noticias= {this.props.id_Cat_Noticias}
            
            onClickCad={this.onClickEdit} 
            categorias={this.props.categorias}/> 
            
                </Modal>

            </Fragment>
        )
    }


}
export default LinhaNoticia
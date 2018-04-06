import React, { Component, Fragment } from 'react'

import { Modal } from 'antd'
import 'antd/lib/modal/style/css'
import AddVideos from './AddVideos'

// import getFromAPI, { postFromAPI, deleteFromAPI} from '../../../services/APIServices'
import axios from 'axios'

class LinhaVideo extends Component {
    state = {
        visible: false,
        video: {
            titulo: '',
            descricao: '',
            url: '',
            link_Externo: '',
            id_Cat_Videos: '',
            nome_Cat: ''
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

   

    onClickEdit=(videos, categorias)=>{
        
        
        const teste ={
            id: this.props.video.id,
            
            titulo: videos.titulo,
            descricao: videos.descricao,
            url: videos.url,
            link_Externo: videos.link_Externo,
            id_Cat_Videos: videos.id_Cat_Videos,
            // nome_Cat: categorias.nome
            
        }
       
        axios.put('http://renatafelix-001-site1.gtempurl.com/api/Videos/Atualizar', teste)
        .then(res=> console.log(this.state))
        .catch(error=>alert(error))    
        
        
        
   
    console.log(teste)
  
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
                        <label> {this.props.categorias.nome} </label>
                    </td>
                    <td>
                        <button className="btn-remove" onClick={this.onClick}>×</button>
                    </td>
                    <td>
                        <button className="btn-remove" onClick={this.showModal} > Editar</button>
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
                    {/* <tr>
                    <td> */}
                        <label> ID {this.props.id} </label>
                    {/* </td>
                    <td> */}
                        <label> Desc {this.props.descricao} </label>
                    {/* {/* </td> */}

                    <label> URL {this.props.url} </label>

                    <label> Link {this.props.link_Externo} </label>

                    <label>Cat {this.props.nome} </label>
                    {/* </tr> */} */}
            <AddVideos value="Editar"  onClickCad={this.onClickEdit} categorias={this.props.categorias}/> 
            
                </Modal>

            </Fragment>
        )
    }


}
export default LinhaVideo
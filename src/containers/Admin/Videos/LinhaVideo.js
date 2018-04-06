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

   

    onClickEdit=(cat)=>{
        
        
        // const teste ={
        //     id: this.props.categoria.id,
        //     nome: cat.nome,
        //     videos: this.props.categoria.videos
        // }
       
        // axios.put('http://renatafelix-001-site1.gtempurl.com/api/Categorias_Videos/Atualizar', teste)
        // .then(res=> console.log('ok'))
        // .catch(error=>alert(error))    
        
        
        
   
    console.log(cat)
  
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
                        <label> {this.props.id_Cat} </label>
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
                    <tr>
                    <td>
                        <label> {this.props.id} </label>
                    </td>
                    <td>
                        <label> {this.props.nome} </label>
                    </td>
                    </tr>
           <AddVideos value="Editar"  onClickCad={this.onClickEdit} />
                   
                </Modal>

            </Fragment>
        )
    }


}
export default LinhaVideo
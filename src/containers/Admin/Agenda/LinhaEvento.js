import React, { Component, Fragment } from 'react'

import { Modal } from 'antd'
import 'antd/lib/modal/style/css'
import AddEventos from './AddEventos'
// import getFromAPI, { postFromAPI, deleteFromAPI} from '../../../services/APIServices'
import axios from 'axios'

class LinhaEvento extends Component {
    state = {
        visible: false,
        video: {
            id: this.props.id,
            descricao: this.props.descricao,
            url_Imagem: this.props.url_Imagem,
            data_Evento: this.props.data_Evento,
            tag: this.props.tag,
            valor: this.props.valor
            //nome_Cat: ''
        }
            
    }
        
    componentDidMount(){

        // this.setState({
        //     video:{
        //     titulo:this.props.titulo,
        //     descricao:this.props.descricao, 
        //     url:this.props.url,
        //     link_Externo:this.props.link_Externo,
        //     id_Cat_Videos:this.props.id_Cat_Videos
        //     }
        // })
        // console.log(this.state)
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

   

    onClickEdit=(evento)=>{
       
      
        axios.put('http://renatafelix-001-site1.gtempurl.com/api/Agenda/Atualizar', evento)
        .then(res=> alert('Vídeo Editado com Sucesso!'))
        .catch(error=>alert(error))    
        
        
        
   
    // console.log(teste)
  
    }

    render() {
      
        const {titulo, id, descricao, url_Imagem, data_Evento, tag, valor } = this.props;

        return (

            <Fragment>
              

                <tr>
                    <td>
                        <label> {this.props.id} </label>
                    </td>
                    <td>
                        <label> {this.props.titulo} </label>
                    </td>
                    {/* <td>
                        <label> {this.props.descricao} </label>
                    </td> */}
                    <td>
                        <label> {this.props.data_Evento} </label>
                    </td>
                    {/* <td>
                        <label> {this.props.link_Externo} </label>
                    </td> */}
                    {/* <td>
                        <label> {this.props.categorias.nome} </label>
                    </td> */}
                    
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
                    
            <AddEventos value="Editar"
            id={this.props.id}
             titulo={titulo} 
             descricao={this.props.descricao} 
             url_Imagem={this.props.url_Imagem}
             data_Evento={this.props.data_Evento} 
             tag={this.props.tag}
             valor={this.props.valor}

             onClickCad={this.onClickEdit} categorias={this.props.categorias}/> 
            
                </Modal>

            </Fragment>
        )
    }


}
export default LinhaEvento
import React, { Component } from 'react'


import './AddEventos.css'



class AddEventos extends Component {

    state = {
        evento: {
            titulo: '',
            descricao: '',
            data_Evento: '',
            valor: '',
            tag:'',
            id_unidade: ''

        }
    }
    onChangeVideo = (e) => {
        this.setState({
            evento: {
                ...this.state.evento,
                [e.target.getAttribute('name')]: e.target.value
            }
        })
    }

onSubmit = (e) =>{
 e.preventDefault()
 this.props.onClickCad(this.state.evento)
}

    render() {

         const { onChangeVideo} = this
        const {titulo, descricao, data_Evento, valor, tag, id_unidade } = this.state.evento

        return (

            <div className="card row -justify-center -align-center CategoryForm">
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <label> Título </label>
                        <input type="text" name="titulo"  onChange={onChangeVideo} />

                        <label> Descrição </label>
                        <textarea name="descricao"  onChange={onChangeVideo} />

                        <label> Data do Evento</label>
                        <input type="text" name="data_Evento"  onChange={onChangeVideo} />

                        <label> Valor </label>
                        <input type="text" name="valor" onChange={onChangeVideo} />

                        
                        <label> Tag </label>
                        <input type="text" name="tag" onChange={onChangeVideo} />

                        <label> Id Unidade </label>
                        <input type="text" name="id_unidade"  onChange={onChangeVideo} />

                    </div>
                    <button className="btn-add">Cadastrar </button>

                </form>
            </div>
        )

    }
}

export default AddEventos
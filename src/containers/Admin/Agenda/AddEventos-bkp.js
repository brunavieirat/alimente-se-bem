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
 console.log(this.state.evento)
}

    render() {

         const { onChangeVideo} = this
        const {titulo, descricao, data_Evento, valor, tag, id_unidade } = this.state.evento

        return (

            <div className="card row -justify-center -align-center CategoryForm">
            
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <h1> Agenda </ h1>
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
import React, { Component } from 'react'


import './AddVideos.css'



class AddVideos extends Component {

    state = {
        video: {
            titulo: '',
            descricao: '',
            url: '',
            link_Externo: '',
            id_Cat_Videos: ''

        }
    }
    onChangeVideo = (e) => {
        this.setState({
            video: {
                ...this.state.video,
                [e.target.getAttribute('name')]: e.target.value
            }
        })
    }

onSubmit = (e) =>{
 e.preventDefault()
 this.props.onClickCad(this.state.video)
 console.log(this.state.video)

}


    render() {

         const { onChangeVideo} = this
         const {titulo, descricao, url,  link_Externo, id_Cat_Videos } = this.state.video

        return (

            <div className="card row -justify-center -align-center CategoryForm">
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <label> Título </label>
                        <input type="text" name="titulo" required="required" value={titulo} onChange={onChangeVideo} />

                        <label> Descrição </label>
                        <textarea name="descricao" required="required" value={descricao} onChange={onChangeVideo} />

                        {/* // <label> Valor </label> */}
                        {/* // <input type="text" name="valor"  onChange={onChangeVideo} /> */}

                        <label> URL Vídeo</label>
                        <input type="text" name="url" required="required" onChange={onChangeVideo} />

                        <label> Link Externo para maiores informações </label>
                        <input type="text" name="link_Externo"  onChange={onChangeVideo} />

                        <label> Categoria </label>
                        <input type="text" name="id_Cat_Videos" required="required" onChange={onChangeVideo} />

                    </div>
                    <button className="btn-add">Cadastrar </button>

                </form>
            </div>
        )

    }
}

export default AddVideos
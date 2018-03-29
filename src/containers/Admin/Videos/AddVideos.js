import React, { Component } from 'react'


import './AddVideos.css'



class AddVideos extends Component {

    state = {
        video: {

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
}




    render() {

         const { onChangeVideo} = this
       

        return (

            <div className="card row -justify-center -align-center CategoryForm">
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <label> Título </label>
                        <input type="text" name="title" onChange={onChangeVideo} />

                        <label> Descrição </label>
                        <textarea name="desc" onChange={onChangeVideo} />

                        <label> Valor </label>
                        <input type="text" name="price" onChange={onChangeVideo} />

                        <label> URL Vídeo</label>
                        <input type="text" name="url" onChange={onChangeVideo} />

                        <label> Link Externo para maiores informações </label>
                        <input type="text" name="inf" onChange={onChangeVideo} />

                        <label> Categoria </label>
                        <input type="text" name="category" onChange={onChangeVideo} />

                    </div>
                    <button className="btn-add">Cadastrar </button>

                </form>
            </div>
        )

    }
}

export default AddVideos
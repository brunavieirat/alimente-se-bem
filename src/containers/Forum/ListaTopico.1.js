import React, { Component } from 'react'

import './ListaTopicos.css'


class AddTopico extends Component {


    render() {

        return (

            <section className="forum-topico">
                <div className="design-border">
                    <div className="left">
                        <div className="forum-title list">
                            <h1> Título do Tópico </h1>
                        </div>
                        <br />
                        <div className="forum-tags inline">
                            <label className="forum-tag"> frutas </label>

                            <label className="forum-tag"> nutrição </label>

                            <label className="forum-tag"> tag </label>
                        </div>
                    </div>
                    <div className="right">
                        <div className="forum-topico__post-lista right">
                            <label className="forum-nut right"> Meire Silva </label>
                            <br />
                            <div className="right"> <label className="forum-data right-two"> 28/03/2018 11:59 </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="design-border">
                    <div className="left">
                        <div className="forum-title list">
                            <h1> Título do Tópico </h1>
                        </div>
                        <br />
                        <div className="forum-tags inline">
                            <label className="forum-tag"> frutas </label>

                            <label className="forum-tag"> nutrição </label>

                            <label className="forum-tag"> tag </label>
                        </div>
                    </div>
                    <div className="right">
                        <div className="forum-topico__post-lista right">
                            <label className="forum-nut right"> Meire Silva </label>
                            <br />
                            <div className="right"> <label className="forum-data right-two"> 28/03/2018 11:59 </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="design-border">
                    <div className="left">
                        <div className="forum-title list">
                            <h1> Título do Tópico </h1>
                        </div>
                        <br />
                        <div className="forum-tags inline">
                            <label className="forum-tag"> frutas </label>

                            <label className="forum-tag"> nutrição </label>

                            <label className="forum-tag"> tag </label>
                        </div>
                    </div>
                    <div className="right">
                        <div className="forum-topico__post-lista right">
                            <label className="forum-nut right"> Meire Silva </label>
                            <br />
                            <div className="right"> <label className="forum-data right-two"> 28/03/2018 11:59 </label>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default AddTopico
import React, { Component } from 'react'

import './ForumTopico.css'


class ForumTopico extends Component {


    render() {

        return (

            <section className="forum-topico">

                <div className="forum-title">
                    <h1> Título do Tópico </h1>
                </div>
                <div className="forum-tags">
                    <p className="forum-tag"> frutas </p>

                    <p className="forum-tag"> nutrição </p>

                    <p className="forum-tag"> tag </p>
                </div>

                <div className="forum-topico__post">
                    <p className="forum-nut"> Meire Silva </p>
                    <p className="forum-data"> 28/03/2018 11:59 </p>

                    <p className="forum-topico__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                </p>
                </div>


                <div className="forum-topico__resp">

                    <div className="forum-qtdResp"> ?? Comentários </div>
                    <div>
                        <p className="forum-user"> Nome usuário </p>
                        <p className="forum-data__resp"> 28/03/2018 11:59 </p>
                    </div>

                    <div>
                        <p className="forum-topico__respUser">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                </p>
                    </div>
                </div>

                <div className="forum-topico__resp">


                    <div>
                        <p className="forum-user"> Nome usuário </p>
                        <p className="forum-data__resp"> 28/03/2018 11:59 </p>
                    </div>

                    <div>
                        <p className="forum-topico__respUser">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
</p>
                    </div>
                </div>
            </section>

        )
    }
}

export default ForumTopico

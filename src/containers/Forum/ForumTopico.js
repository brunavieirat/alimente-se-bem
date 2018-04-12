import React, { Component, Fragment } from 'react'
import ListaTopicos from './ListaTopico'
<<<<<<< HEAD
=======
// import AddTopico from './AddTopico'
>>>>>>> screen-layout

import './ForumTopico.css'
import axios from 'axios'


class ForumTopico extends Component {

    state={
        topicos: []
    }

    componentDidMount(){
        axios.get('http://renatafelix-001-site1.gtempurl.com/api/Forum?sort=-createdAt')
        .then(res => {

          //  console.log(res.data)
            this.setState({
                ...this.state,
                topicos: res.data,
                              
        })
        console.log(this.state)
    })
  
}


	render() {

		return (
			<Fragment>

				{/* <AddTopico /> */}
				<ListaTopicos />
           

				<section className="forum-topico">

					<div className="forum-title">
						<h1> Título do Tópico </h1>
					</div>
					<div className="forum-tags">
						<label className="forum-tag"> frutas </label>

						<label className="forum-tag"> nutrição </label>

						<label className="forum-tag"> tag </label>
					</div>

					<div className="forum-topico__post">
						<label className="forum-nut"> Meire Silva </label>
						<label className="forum-data"> 28/03/2018 11:59 </label>

						<label className="forum-topico__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						</label>
					</div>


					<div className="forum-topico__resp">

						<div className="forum-qtdResp"> ?? Comentários </div>
						<div>
							<label className="forum-user"> Nome usuário </label>
							<label className="forum-data__resp"> 28/03/2018 11:59 </label>
						</div>

						<div>
							<label className="forum-topico__respUser">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							</label>
						</div>
					</div>

					<div className="forum-topico__resp">
						<div>
							<label className="forum-user"> Nome usuário </label>
							<label className="forum-data__resp"> 28/03/2018 11:59 </label>
						</div>

						<div>
							<label className="forum-topico__respUser">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							</label>
						</div>
					</div>

					<form className="forum-topico__resp">


						<label className="forum-user__post"> Nome usuário </label>
						{/* <label className="forum-data__resp"> 28/03/2018 11:59 </label> */}

						<div className="forum-post">
							<textarea className="forum-topico__respUserTextarea">

							</textarea>

							<button className="btn-add"> Publicar </button>
						</div>
					</form>


				</section>
			</Fragment>
		)
	}
}

export default ForumTopico

import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
// import SectionVideos from '../components/SectionVideos/SectionVideos'
import CardVideoOpen from '../components/CardVideo/CardVideoOpen'
import CardVideo from '../components/CardVideo/CardVideo'
import getFromAPI from '../services/APIServices'
import axios from 'axios'
import '../components/SectionVideos/SectionVideos.css'

// import TitlePage from '../components/TitlePage/TitlePage'

const postFromAPI = (url, {props}) => (
	axios.post('http://renatafelix-001-site1.gtempurl.com/api/'+url)
)


export default class Videos extends Component {
	
	state = {
		descricao: 'testando API cadastro Videos',
		url: 'https://www.youtube.com/watch?v=c7vNI0e1Adc',
		link_Externo:'https://sesichef.sesisp.org.br/conheca-o-projeto/',
		valor: '0.00',
		id_Cat_Videos: '1',
		// pageTitleColor: {
		// 	background: '#E74D57',
		// },
		events: []

	}
	


	componentWillMount() {
		getFromAPI('/Videos').then(res => {
			
			this.setState({
				events: res.data
				
			})
			
		})
		
	}


	// testepost(){
	// 	alert('ajidis')
	// 	axios.post('http://renatafelix-001-site1.gtempurl.com/api/Videos/Cadastrar', {
	// 		titulo: 'teste POST'
	// }
	// 	// this.setState({titulo:"teste POST"})
	// 	// const title = this.titulo: "teste POST"
	// 	//  {descricao: "testando API cadastro Videos"},
	// 	//  {url: "https://www.youtube.com/watch?v=c7vNI0e1Adc"},
	// 	//  {link_Externo:"https://sesichef.sesisp.org.br/conheca-o-projeto/"},
	// 	//  {valor: "0.00"},
	// 	//  {id_Cat_Videos: "1"}
	// 	// postFromAPI('/Videos/Cadastrar', {
	// 	// titulo: 'teste POST'
	// 	// }

	// 	// const videos ={
	// 	// 	descricao: this.state.descricao,
	// 	// 	url: this.state.url,
	// 	// 	link_Externo: this.state.link_Externo,
	// 	// 	valor: this.state.valor,
	// 	// 	id_Cat_Videos: this.state.id_Cat_Videos
	// 	// 	}
	// ).then(function (res){
	// 	alert("ok")})
	// .catch(function (res){
	// 	alert("errrooor")})
	// }


	renderEvents() {


		return this.state.events.map((event) => {
			
			return (

				<CardVideo
					title={event.titulo}
					price={event.valor}
					description={event.descricao}
					url={event.url}
				/>				
			)
			})				
	}



	render() {
		return (
			<Fragment>
				<Route path="/videos/:id"
					component={CardVideoOpen} />
					
					<input type="button" 
					onClick={() =>{
												
						axios.post('http://renatafelix-001-site1.gtempurl.com/api/Videos/Cadastrar',
						{titulo: 'TESTE PELA API',
						descricao: 'testando API cadastro Videos',
						url: 'https://www.youtube.com/watch?v=c7vNI0e1Adc',
						link_Externo:'https://sesichef.sesisp.org.br/conheca-o-projeto/',
						valor: '0.00',
						id_Cat_Videos: '1'})
				.then(res => {
					alert("ok")})
				.catch(error =>{
					console.log(error)})
				}
					 }
					  value="Cadastrar"/>

					  <input type="button" 
					onClick={() =>{
												
						axios.delete('http://renatafelix-001-site1.gtempurl.com/api/Videos/Excluir',
						{
							id: 11,
							titulo: "titulo do Vídeo",
							descricao: "descricao do Vídeo",
							url: "URL do Vídeo",
							link_Externo: "vincular o vídeo a outras páginas",
							valor: "valor do curso (inserir '00,00' caso seja gratuito",
							categorias_Videos: null,
							id_Cat_Videos: 1
					})
				.then(res => {
					alert("ok")})
				.catch(error =>{
					console.log(error)})
				}
					 }
					  value="Excluir"/>

			<section className="sectionVideos">

					{this.renderEvents()}

					{/* <PageTitle style={this.state.pageTitleColor} title="Videos"/> */}
					{/* <TitlePage /> */}


					{/*<SectionVideos/>*/}

				</section>
			</Fragment>
		)
	}
}
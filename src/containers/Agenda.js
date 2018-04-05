import React, { Fragment, Component } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
// import getFromAPI from '../services/APIServices';
// import AgendaCalendar from '../components/Agenda/Calendar/Calendar'
import Calendario from '../components/Agenda/Calendar/Calendar'
import Evento from '../components/Agenda/CardEvent/CardEvent'
import moment from 'moment'
import axios from 'axios'



export default class Agenda extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pageTitleColor: {
				background: '#E74D57',
			},
			events: [],
			unidades: [],
			
		}
	}

	// componentDidMount() {
	// 	// getFromAPI('/Agenda').then(res => {
	// 	// 	this.setState({
	// 	// 		events: res.data
	// 	// 	})
	// 	// })
	// 	const data = new Date()
	// 	const mes = data.getMonth()+1
	// 	const ano = data.getFullYear()			

	// 	axios.get('http://renatafelix-001-site1.gtempurl.com/api/Agenda/Data?ano='+ ano + '&mes=' + mes)
	// 	.then(res=>{
	// 		this.setState({
	// 		events: res.data,
			
	// 		})
	// 		// console.log(this.state.events)
	// 	})
    // .catch(error=> alert(error))
		
	// 	// {moment(event.data_Evento).format('DD')}
	// }


	onSelect=(date) => {

		
		const mes = moment(date._d).format('MM')
		const ano = moment(date._d).format('YYYY')		

		axios.get('http://renatafelix-001-site1.gtempurl.com/api/Agenda/Data?ano='+ ano + '&mes=' + mes)
		.then(res=>{
			this.setState({
			events: res.data,
			
			})
			// console.log(this.state.events)
		})
    .catch(error=> alert(error))
		
		// {moment(event.data_Evento).format('DD')}

		
		// this.setState({
			
		// 	selectData: moment(date._d).format('YYYY-MM-DD')
		// 	})
		
		
	}

	renderEvents() {
		
		return this.state.events.map((event) => {
			return (
				<Evento
					key={event.id}
					title={event.titulo}
					urlImagem={event.url_Imagem}
					dateday={moment(event.data_Evento).format('DD')}
					datemonth={moment(event.data_Evento).format('MMM')}
					descricao={event.descricao}
					// place={unidades.nome}
				/>
				
			);
		})
	}

	render() {
		
		return (
			<Fragment>
				<PageTitle style={this.state.pageTitleColor} title="Agenda" />
				<Calendario onSelect={this.onSelect} />
				{/* <input type="button" 
					onClick={() =>{
												
						axios.post('http://renatafelix-001-site1.gtempurl.com/api/Agenda',
						{
							titulo: 'TESTE PELA API',
						descricao: 'testando API cadastro Eventos',
						data_Evento: '2018-03-23',
						valor: '0,00',
						tag:'teste',
						id_unidade: 1
					})
				.then(res => {
					alert("ok")})
				.catch(error =>{
					console.log(error)})
				}
					 }
					  value="Cadastrar"/>

					  <input type="button" 
					onClick={() =>{
												
						axios.delete('http://renatafelix-001-site1.gtempurl.com/api/Noticias/Excluir',
						{
							id: 4
					})
				.then(res => {
					alert("ok")})
				.catch(error =>{
					console.log(error)})
				}
					 }
					  value="Excluir"/> */}
				{this.renderEvents()}

				

			</Fragment>
		)
	}
}
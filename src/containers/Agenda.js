import React, { Fragment, Component } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import getFromAPI from '../services/APIServices';
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
			events: []
		}
	}

	componentWillMount() {
		getFromAPI('/Agenda').then(res => {
			this.setState({
				events: res.data
			})
		})

	}

	renderEvents() {
		
		return this.state.events.map((event) => {
			return (
				<Evento
					key={event.id}
					title={event.titulo}
					dateday={moment(event.data_Evento).format('DD')}
					datemonth={moment(event.data_Evento).format('MMM')}
					place={event.unidades_Sesi.nome}
				/>
			);
		})
	}

	render() {
		
		return (
			<Fragment>
				<PageTitle style={this.state.pageTitleColor} title="Agenda" />
				<Calendario onSelectDate={(date) => console.log(date)} />
				<input type="button" 
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
					  value="Excluir"/>
				{this.renderEvents()}

			</Fragment>
		)
	}
}
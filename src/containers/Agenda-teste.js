import React, { Fragment, Component } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
// import getFromAPI from '../services/APIServices';
// import AgendaCalendar from '../components/Agenda/Calendar/Calendar'
import Calendario from '../components/Agenda/Calendar/Calendar'
import Evento from '../components/Agenda/CardEvent/CardEvent'

import { Calendar} from 'antd'
import 'antd/lib/calendar/style/css'

import 'moment/locale/pt-br'

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
			value: moment('2017-01-25'),
			selectedValue: moment('2017-01-25')
			  
		}
	}

	componentWillMount() {
		// getFromAPI('/Agenda').then(res => {
		// 	this.setState({
		// 		events: res.data
		// 	})
		// })
		const date = new Date()
		const mes = date.getMonth()+1
		const ano = date.getFullYear()			

		axios.get('http://renatafelix-001-site1.gtempurl.com/api/Agenda/Data?ano='+ ano + '&mes=' + mes)
		.then(res=>{
			this.setState({
			events: res.data 
			})
			
		})
    .catch(error=> alert(error))
		
		// {moment(event.data_Evento).format('DD')}
	}


	
	onSelect = (value) => {
		this.setState({
		  value,
		  selectedValue: value,
		})
		console.log(this.state.selectedValue)
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

				<div className="calendar">
				<Calendar
					// dateCellRender={dateCellRender} 
					// monthCellRender={monthCellRender}
					onSelect={this.onSelect}
					fullscreen={false}

				/>
			</div>

				{this.renderEvents()}

				

			</Fragment>
		)
	}
}
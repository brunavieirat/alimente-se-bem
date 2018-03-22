import React, { Fragment, Component } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import getFromAPI from '../services/APIServices';
// import AgendaCalendar from '../components/Agenda/Calendar/Calendar'
import Calendario from '../components/Agenda/Calendar/Calendar'
import Evento from '../components/Agenda/CardEvent/CardEvent'
import moment from 'moment'



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

				{this.renderEvents()}

			</Fragment>
		)
	}
}
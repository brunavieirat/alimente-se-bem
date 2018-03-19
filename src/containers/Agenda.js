import React, { Fragment, Component } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'

// import AgendaCalendar from '../components/Agenda/Calendar/Calendar'
import Teste from '../components/Agenda/Calendar/teste'
import Evento from '../components/Agenda/CardEvent/CardEvent'
import CardEventOpen from '../components/Agenda/CardEvent/CardEventOpen'


export default class Agenda extends Component {
	constructor(props){
		super(props)
		this.state = {
			pageTitleColor: {
				background: '#E74D57',
			}
		}
	}
    
	render(){
		return(
			<Fragment>
				<PageTitle style={this.state.pageTitleColor} title="Agenda" />,
				<Teste />
				<Evento />
				<CardEventOpen />
			</Fragment>
		)
	}
}
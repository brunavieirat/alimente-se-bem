import React, { Fragment, Component } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'

// import AgendaCalendar from '../components/Agenda/Calendar/Calendar'
import SectionAgenda from '../components/SectionAgenda/SectionAgenda'


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
				<SectionAgenda />
			</Fragment>
		)
	}
}
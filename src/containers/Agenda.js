import React, { Fragment, Component } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import CardButton from '../components/CardButton/CardButton'

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
				<PageTitle style={this.state.pageTitleColor} title="Agenda" />
				<CardButton />
			</Fragment>
		)
	}
}
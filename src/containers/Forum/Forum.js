import React, { Fragment, Component } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import CardButton from '../../components/CardButton/CardButton'

export default class Forum extends Component {
	
	this.state.style = {
		'background': '#96FF00',
	}
	
	render(){
		
		return(
			<Fragment>
				<PageTitle style={style} title="Forum" />
				<CardButton />
			</Fragment>
		)
	}
}
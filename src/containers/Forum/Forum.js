import React, { Fragment, Component } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import CardButton from '../../components/CardButton/CardButton'

export default class Forum extends Component {

	constructor(props){
		super(props)
		this.state = {
			pageTitleColor: {
				background: '#ADC837',
			}
		}
	}
	render(){
		
		return(
			<Fragment>
				<PageTitle style={this.state.pageTitleColor} title="Forum" />
				<CardButton />
			</Fragment>
		)
	}
}
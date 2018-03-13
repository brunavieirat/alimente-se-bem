import React, { Fragment, Component } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'

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
			</Fragment>
		)
	}
}
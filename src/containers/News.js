import React, { Fragment, Component } from 'react'


export default class News extends Component {
	constructor(props){
		super(props)
		this.state = {
			pageTitleColor: {
				background: '#1AA0E1',
			}
		}
	}
    
	render(){
		return(
			<Fragment>
				 <PageTitle style={this.state.pageTitleColor} title="Notícias" /> 
				 	</Fragment>
		)
	}
}
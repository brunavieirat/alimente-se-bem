import React, { Component, Fragment } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'

class ForumTopic extends Component {
	constructor(props){
		super(props)
		this.state = {
			pageTitleColor: {
				background: '#ADC837',
			},
			data: []
			
		}
	}

	render(){
		return(
			<Fragment>
				<section className="forum-section">
					<PageTitle style={this.state.pageTitleColor} title="Forum" />
				</section>
			</Fragment>
			
		)
	}
}


export default ForumTopic

 

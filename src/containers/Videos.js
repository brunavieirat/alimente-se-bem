import React, {Component} from 'react'
import SectionVideos from '../components/SectionVideos/SectionVideos'
import PageTitle from '../components/PageTitle/PageTitle'



export default class Videos extends Component {
	constructor(props){
		super(props)
		this.state = {
			pageTitleColor: {
				background: '#1CABA0',
			}
		}
	}	
	render(){
		return(
			<section>
				<PageTitle style={this.state.pageTitleColor} title="Videos"/>
				<SectionVideos/>
			</section>

		)
	}
}
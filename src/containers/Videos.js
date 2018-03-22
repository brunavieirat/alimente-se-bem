import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import SectionVideos from '../components/SectionVideos/SectionVideos'
import CardVideoOpen from '../components/CardVideo/CardVideoOpen'

// import TitlePage from '../components/TitlePage/TitlePage'





export default class Videos extends Component {
	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		pageTitleColor: {
	// 			background: '#1CABA0',
	// 		}
	// 	}
	// }	
	render(){
		return(
			<section>
				{/* <PageTitle style={this.state.pageTitleColor} title="Videos"/> */}
				{/* <TitlePage /> */}

				<Route path="/videos/:id" component={CardVideoOpen}  />
				<SectionVideos/>
			
			</section>

		)
	}
}
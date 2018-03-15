import React, {Component} from 'react'
import SectionVideos from '../components/SectionVideos/SectionVideos'
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
				<SectionVideos/>
			
			</section>

		)
	}
}
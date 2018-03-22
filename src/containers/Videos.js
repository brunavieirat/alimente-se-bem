import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
// import SectionVideos from '../components/SectionVideos/SectionVideos'
import CardVideoOpen from '../components/CardVideo/CardVideoOpen'
import CardVideo from '../components/CardVideo/CardVideo'
import getFromAPI from '../services/APIServices'
import '../components/SectionVideos/SectionVideos.css'

// import TitlePage from '../components/TitlePage/TitlePage'



export default class Videos extends Component {

	state = {
		// pageTitleColor: {
		// 	background: '#E74D57',
		// },
		events: []

	}

	componentWillMount() {
		getFromAPI('/Videos').then(res => {
			this.setState({
				events: res.data
			})
		})
	}

	renderEvents() {


		return this.state.events.map((event) => {

			return (

				<CardVideo
					title={event.titulo}
					price={event.valor}
					description={event.descricao}
					url={event.url}
				/>
			)
			})

		
		
	}



	render() {
		return (
			<Fragment>
				<Route path="/videos/:id"
					component={CardVideoOpen} />
					

			<section className="sectionVideos">

					{this.renderEvents()}

					{/* <PageTitle style={this.state.pageTitleColor} title="Videos"/> */}
					{/* <TitlePage /> */}


					{/*<SectionVideos/>*/}

				</section>
			</Fragment>
		)
	}
}
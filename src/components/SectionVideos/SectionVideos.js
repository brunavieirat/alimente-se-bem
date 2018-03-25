import React, { Component } from 'react'
import './SectionVideos.css'
// import ButtonSearch from '../ButtonSearch/ButtonSearch'
// import Category from '../Category/Category'
import CardVideo from '../CardVideo/CardVideo'
// import imagemTeste from '../../assets/images/logo-sesi.png'
// import TitlePage from '../TitlePage/TitlePage'
// import Footer from '../Footer/Footer'
// import CardVideoOpen from '../CardVideo/CardVideoOpen'
import getFromAPI from '../../services/APIServices'

<<<<<<< HEAD
function teste  () {
alert('ooi')
	// <CardVideoOpen />
}

const sectionVideos = (props) => (

	<section className="sectionVideos">
	
		{/* <CardVideoOpen/>	 */}
		<CardVideo onClick = "teste()"/>
		 {/* <CardVideo />
		<CardVideo />
		<CardVideo />  */}
		
		{/* <Footer /> */}
	</section>	
=======
export default class SectionVideos extends Component {

	state = {
		// pageTitleColor: {
		// 	background: '#E74D57',
		// },
		events: []

	}

	componentWillMount(){
		getFromAPI('/Videos').then(res => {
			this.setState({
				events: res.data
			})
		})
	}
>>>>>>> 7bde8b13103fcf0ea41fddd206e102d3e5b14a37

	renderEvents(){


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
	
		render(){

			return(

				<section className="sectionVideos">
		
			{this.renderEvents()}
		{/* <CardVideo 
		title="Teste"
		price="0.00"
		description="fdgdgdfgdfg"
		url="https://www.youtube.com/embed/XXf5JQs4c7g?modestbranding=1"
		/> */}
		  
{/*		
		 <Footer /> */}
	</section>	
			)
		}
	}
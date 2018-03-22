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

export default class SectionVideos extends Component {

	// state = {
	// 	// pageTitleColor: {
	// 	// 	background: '#E74D57',
	// 	// },
	// 	events: []

	// }

	// componentWillMount(){
	// 	getFromAPI('/Videos').then(res => {

	// 	}
	// }

	render(){


return (
<section className="sectionVideos">
	
			
		<CardVideo 
		title="Teste"
		price="0.00"
		description="fdgdgdfgdfg"
		url="https://www.youtube.com/embed/XXf5JQs4c7g?modestbranding=1"
		/>
		  
{/*		
		 <Footer /> */}
	</section>	
)

		}

		}
    

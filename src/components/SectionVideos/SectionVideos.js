import React from 'react'
import './SectionVideos.css'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import Category from '../Category/Category'
import CardVideo from '../CardVideo/CardVideo'
// import imagemTeste from '../../assets/images/logo-sesi.png'
import TitlePage from '../TitlePage/TitlePage'
import Footer from '../Footer/Footer'


const sectionVideos = () => (

	<section className="sectionVideos">
	
			
		<CardVideo onClick = "teste()"/>
		  <CardVideo />
		<CardVideo />
		<CardVideo />  
{/*		
		 <Footer /> */}
	</section>	



)
    
export default sectionVideos
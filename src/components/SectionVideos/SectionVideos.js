import React from 'react'
import './SectionVideos.css'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import Category from '../Category/Category'
import CardVideo from '../CardVideo/CardVideo'
import imagemTeste from '../../assets/images/logo-sesi.png'
import TitlePage from '../TitlePage/TitlePage'



const sectionVideos = () => (
	<section className="sectionVideos">
	{/* <TitlePage titlePage="Vídeos" /> */}

	{/* <div className="sectionVideos-background">
	</div> */}
		{/* <ButtonSearch/>
		<TitlePage titlePage="Vídeos"/>
		<Category name = "Natyyyyy"/> */}
		{/* <CardVideo name={imagemTeste} alt="tst" nomeCurso="Alimentação Saudável" /> */}
		<CardVideo />
	</section>	

)
    
export default sectionVideos
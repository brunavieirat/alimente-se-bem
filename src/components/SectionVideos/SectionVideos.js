import React from 'react'
import './SectionVideos.css'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import Category from '../Category/Category'
import CardVideo from '../CardVideo/CardVideo'
import imagemTeste from '../../assets/images/logo-sesi.png'


const sectionVideos = () => (
	<section className="section-cursos">
		<ButtonSearch/>
		<Category name = "Natyyyyy"/>
		<CardVideo image={imagemTeste} alt="tst" nomeCurso="Alimentação Saudável" />
	</section>
)
    
export default sectionVideos
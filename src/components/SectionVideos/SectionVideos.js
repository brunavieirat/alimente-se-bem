import React, { Component } from 'react'
import './SectionVideos.css'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import Category from '../Category/Category'
import CardVideo from '../CardVideo/CardVideo'
import imagemTeste from '../../assets/logo-sesi.png'


export default class SectionVideos extends Component {

	render() {
		return (
			<section className="section-cursos">
				<ButtonSearch/>
				<Category name = "Natyyyyy"/>
				<CardVideo image={imagemTeste} alt="tst" nomeCurso="Alimentação Saudável" />
			</section>
		)
	}
}
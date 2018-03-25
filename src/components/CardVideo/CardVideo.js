import React from 'react'
import './CardVideo.css'


const CardVideo = (props) =>(

	// <div className="div-CardCurso">
	// 	<div className="cardCurso-img">
	// 		<img src={props.name} alt={props.alt}/>
	// 	</div>

		
	// 	<div className="cardCuso-title">
	// 		{props.nomeCurso}
<div className="cardVideo">
	<div className="cardVideo-content">
	<div className="cardVideo-title">
	RECEITA SANDUICHE 

	</div>
	<div className="cardVideo-inf">
	<a href="#"></a> 
	</div>
	<div className="cardVideo-price">
	R$ 0,00
	</div>
	
		
	</div>
	
	<div className="cardVideo-videoG">
	<iframe className="cardVideo-video" src="https://www.youtube.com/embed/XXf5JQs4c7g?modestbranding=1" frameborder="0" allow="autoplay"></iframe>
	</div>

	<div className="cardVideo-description">
	<p>
	Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet, consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetu
	</p>
	</div>

<div className="cardVideo-info">
	<a href="#"  onClick={props.teste}> Mais Informações </a>
	</div>

	</div>

)

export default CardVideo
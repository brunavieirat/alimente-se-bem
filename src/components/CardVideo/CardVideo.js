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
	{props.title}	

	</div>
	<div className="cardVideo-inf">
	<a href="#"></a> 
	</div>
	<div className="cardVideo-price">
	{props.price}
	</div>
	
		
	</div>
	
	<div className="cardVideo-videoG">
	<iframe 
	className="cardVideo-video"
	src={props.url} 
	frameborder="0" 
	allow="autoplay">
	</iframe>
	</div>

	<div className="cardVideo-description">
	<p>
	{props.description}
	</p>
	</div>

<div className="cardVideo-info">
	<a href="#"> Mais Informações </a>
	</div>

	</div>

)

export default CardVideo
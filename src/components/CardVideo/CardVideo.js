import React from 'react'
import './CardVideo.css'


const CardVideo = (props) =>(
	<div className="cardVideo">
	<div className="cadVideo-content">
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
	<div className="cardVideo-Video">
	<iframe className="cardVideo-video" src="https://www.youtube.com/embed/XXf5JQs4c7g?modestbranding=1" frameborder="0" allow="autoplay"></iframe>
	</div>
	</div>
		
)

export default CardVideo
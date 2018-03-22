import React from 'react'
import './CardVideoOpen.css'


const CardVideoOpen = (props) => (

	<div className="cardVideo-open">
		<div className="cardVideo-content-open">
			<div className="cardVideo-title-open">
				{props.title}

			</div>
			<div className="cardVideo-inf-open">
				<a href={props.link}></a>
			</div>
			<div className="cardVideo-price-open">
				{props.price}
			</div>


		</div>

		<div className="cardVideo-videoG-open">
			<iframe className="cardVideo-video-open"
				src="https://www.youtube.com/embed/XXf5JQs4c7g?modestbranding=1"
				frameborder="0"
				allow="autoplay"></iframe>
		</div>

		<div className="cardVideo-description-open">
			<p>
				{props.description}
			</p>
		</div>

		<div className="cardVideo-info-open">
			<a href="#"> Mais Informações </a>
		</div>

	</div>




)

export default CardVideoOpen
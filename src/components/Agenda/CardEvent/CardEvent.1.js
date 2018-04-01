import React from 'react'
import './CardEvent.css'


const CardEvent = (props) =>(
	<div className="cardEvent">
		<div className="cardEvent-image">
			<img src={props.name} alt={props.alt}/>
		</div>
		<div >
			{props.event}
            {props.date}
            {props.place}

		</div>
	</div>
		
)

export default CardEvent
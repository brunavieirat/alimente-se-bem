import React, { Component } from 'react'
import './CardVideo.css'


const CardVideo = (props) =>(

	// render (props){
	// 	return(
			<div className="div-CardCurso">
				<div className="cardCurso-img">
					<img src={props.name} alt={props.alt}/>
				</div>
				<div className="cardCuso-title">
                {props.nomeCurso}
				</div>
			</div>
		
)

export default CardVideo
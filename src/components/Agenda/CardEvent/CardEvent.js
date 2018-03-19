import React from 'react'
import './CardEvent.css'

import { Card } from 'antd'
import 'antd/lib/card/style/css'
import sucos from './sucos.jpg'


  
const CardEvent = (props) =>(
	<Card
	className="cardEvent"
    cover={<img alt="example" src={sucos} />}
    >

	<div className="cardEvent-date">
	<p> 24 <br />MAR </p>
	</div>
	<div className="cardEvent-title">
	<p> SUCOS DETOX </p>
	</div>
	<div className="cardEvent-place">
	<p> SESI Santos </p>
	</div>

	<div className="cardVideo-info-secundary">
	<a href="#"> Mais Informações </a>
	</div>

    
  </Card>
		
)

export default CardEvent
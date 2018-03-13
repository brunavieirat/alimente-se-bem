import React from 'react'
import './PageTitle.css'

const PageTitle = (props) => (
	<h2 style={props.style} className="PageTitle">{props.title}</h2>
)

export default PageTitle
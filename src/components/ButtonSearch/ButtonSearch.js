import React from 'react'
import './ButtonSearch.css'


const buttonSearch = () => (
	<div className="div-button-search">
		<input type="text" className="input-search" placeholder="Search" />
		<button type="button" className="button-search">Search</button>
	</div>
)

export default buttonSearch
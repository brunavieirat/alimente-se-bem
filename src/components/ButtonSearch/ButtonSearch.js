import React from 'react'
import { Input } from 'antd'
import './ButtonSearch.css'

const Search = Input.Search

const buttonSearch = () =>(
	<div className="div-button-search">
		{/*<Search
			placeholder="input search text"
			onSearch={value => console.log(value)}
			style={{ width: 200 }}
		/>
		<br /><br />*/}
		{/*<Search
			placeholder="input search text"
			onSearch={value => console.log(value)}
			enterButton
		/>
	<br /><br />*/}
		<Search enterButton="Buscar" size="default"  className="button-search"/>
	</div>
)

export default buttonSearch
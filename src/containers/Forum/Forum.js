import React, { Fragment, Component } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import CardButton from '../../components/CardButton/CardButton'
import bgImage from '../../assets/images/image-05.jpeg'
import './Forum.css'
import axios from 'axios'

class Forum extends Component {
	constructor(props){
		super(props)
		this.state = {
			pageTitleColor: {
				background: '#ADC837',
			},
			sectionStyle: {
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundImage: `url(${bgImage})`,
				height: '800px',
			},
			data: []
			
		}
	}
	render(){

		// const ax = axios.create({
		// 	baseURL: 'http://localhost:3000'
		//   })

		// fetch('http://localhost:3000/assets/fakejsons/eventos.json').then(function(response) { 
		// 	// Convert to JSON
		// 	return response.json()
		// }).then(function(j) {
		// 	// Yay, `j` is a JavaScript object
		// 	console.log(j)
		// })



		// fetch('http://localhost:3000/assets/fakejsons/forum.json')
		// .then( response => response.json() 
		// .then(json => {
		// 	console.log(json)
		// }))
		
		// ax.get('/assets/fakejsons/forum.json')
		// .then(
		// 	response => (data) = response
		// ).catch(
		// 	e => console.log('Esse eh o erro ' +  e)
		// )
		// console.log(data)

		return(
			<Fragment>
				<section className="forum-section">
					<PageTitle style={this.state.pageTitleColor} title="Forum" />
					<CardButton title="Categoria X" />
				</section>
			</Fragment>
		)
	}
}

export default Forum
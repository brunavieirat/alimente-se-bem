import React, { Fragment, Component } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import './Forum.css'
import axios from 'axios'
import ListTopics from './ListTopics'


class Forum extends Component {
	state = {
		pageTitleColor: {
			background: '#ADC837',
		},
		data: [],
		urlGetForumTopics: '',
			
	}

	data = () => {
		axios.get('assets/fakejsons/forum.json').then(response => {
			let resp = response.data
			this.setState({data: {resp}})
		})
	}
	

	componentWillMount(){
		this.data()
	}
	
	treatForumData(){
		return (this.state.data.resp) ? 
			<h1> {this.state.data.resp.map((obj) => (obj.DATA_CRIACAO))}  </h1>
			: <h1>Opa </h1>
	}

	componentDidMount(){
		console.log ('component Did Mount? ==== ', this.state.data)
	}

	render(){
		return(
			<Fragment>
				
				<section className="forum-section">
					<PageTitle style={this.state.pageTitleColor} title="FORUM"/>
					<div className="forum-topico">
						<ListTopics />
					</div>
				</section>
			</Fragment>
		)
	}
}

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

export default Forum
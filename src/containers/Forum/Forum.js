import React, { Fragment, Component } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import './Forum.css'
import getFromAPI from '../../services/APIServices'
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
		getFromAPI('Forum').then(response => {
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

export default Forum
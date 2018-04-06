import React, { Fragment, Component } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import './Forum.css'
import getFromAPI from '../../services/APIServices'
import ListTopics from './ListTopics'
import ForumTags from '../../components/Forum/ForumTags'


class Forum extends Component {
	state = {
		pageTitleColor: {
			background: '#ADC837',
		},
		forumData: [],
		forumTags: [],
	}
	

	componentWillMount(){
		this.getListTopics()
	}

	getNutricionistaName(id){
		return getFromAPI('./Nutricionistas/' + id)
			.then(response => response.nome)	
			// return nutricionistaData
	}

	getListTopics(){
		getFromAPI('Forum').then(response => {
			this.setState({
				forumData: response.data
			})
		}).catch(
			error => console.log(error)
		)
	}

	render(){
		return(
			<Fragment>
				
				<section className="forum-section">
					<PageTitle style={this.state.pageTitleColor} title="FORUM"/>
					<div className="forum-topico">
						<ListTopics forumData={this.state.forumData} >
							<ForumTags />
						</ListTopics>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default Forum
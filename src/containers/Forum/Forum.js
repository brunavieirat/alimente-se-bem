import React, { Fragment, Component } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import getFromAPI from '../../services/APIServices'
import ListTopics from '../../components/Forum/ListTopics'
import ForumTags from '../../components/Forum/ForumTags'
import './Forum.css'

class Forum extends Component {
	state = {
		pageTitleColor: {
			background: '#ADC837',
		},
		forumData: [],
		forumTags: [],
	}
	nutricionistasNames = []
	

	componentWillMount(){
		this.getListTopics()
	}
	

	async treatData(data){
		try{
			let name =  await getFromAPI('./Nutricionistas/' + data.id_Nutricionista)
			data.nutricionista = name.data.nome
			data.data_Criacao = new Date(data.data_Criacao)
			data.tags = data.tags.split(',')
			this.setState({
				forumData: data
			})
		}catch (error) {
			console.log ( error )
		}
	}
	

	async getListTopics(){
		
		try{
			const response = await getFromAPI('Forum')
			response.data.map( data => this.treatData( data ))
			console.log (response)
			
		}catch( error ) {
			console.log(error)
		}
	}

	render(){
		return(
			<Fragment>
				
				<section className="forum-section">
					<PageTitle style={this.state.pageTitleColor} title="FORUM"/>
					<div className="forum-topico">
						<ListTopics forumData={this.state.forumData} >
							<ForumTags tags={this.state.forumData.tags} />
						</ListTopics>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default Forum
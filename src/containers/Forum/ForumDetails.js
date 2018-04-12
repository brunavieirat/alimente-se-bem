import React, { Fragment, Component } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import ForumTopico from '../../components/Forum/ForumTopic'
import getFromAPI from '../../services/APIServices'
import anothername from '../../services/UrlHandler'
import './Forum.css'
// import axios from 'axios'git 

class Forum extends Component {
	constructor(props){
		super(props)
		this.state = {
			pageTitleColor: {
				background: '#ADC837',
			},
			topicDetails: [],
			topicComents: [],
		}
	}
	componentWillMount(){
		let topicId = anothername('id')
		this.getTopicDetails ( topicId)
		// console.log ( topicId)
	}

	

	async getTopicDetails(id){
		const topicDetails = await getFromAPI('Forum/' + id)
		this.treatData(topicDetails.data)
	}

	async treatData(data){
		try{
			let name =  await getFromAPI('./Nutricionistas/' + data.id_Nutricionista)
			data.nutricionista = name.data.nome
			data.tags = data.tags.split(',')

			this.setState({
				topicDetails: data,
				topicComments: data.comentario
			})
			console.log(this.state.topicComments)
		}catch (error) {
			console.log ( error )
		}
	}

	render(){
		return(
			<Fragment>
				<section className="forum-section">
					<PageTitle style={this.state.pageTitleColor} title="Forum - " />
					<ForumTopico 
						title={this.state.topicDetails.titulo}
						nutricionista={this.state.topicDetails.nutricionista}
						data_Criacao={this.state.topicDetails.data_Criacao}
						descricao={this.state.topicDetails.descricao} 
						comments={this.state.topicComments}
					/>
				</section>
			</Fragment>
		)
	}
}

export default Forum
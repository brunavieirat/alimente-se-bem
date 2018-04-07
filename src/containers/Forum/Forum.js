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
		loading: true
	}
	nutricionistasNames = []
	

	componentWillMount(){
		// this.getListTopics()
	}

	componentDidMount(){
		console.log ( ' component did Mount ')
		this.getListTopics()
	}
	
	async getListTopics(){
		
		try{
			const response = await getFromAPI('Forum')
			this.setState({
				forumData: response.data,
				loading: false
			})
			// response.data.map( data => this.treatData( data ))
			console.log (response)
			
		}catch( error ) {
			console.log(error)
		}
	}


	async treatData(data){
		try{
			let name =  await getFromAPI('./Nutricionistas/' + data.id_Nutricionista)
			data.nutricionista = name.data.nome
			data.data_Criacao = new Date(data.data_Criacao)
			data.tags = data.tags.split(',')
			this.setState({
				forumData: data,
				loading: false
			})
		}catch (error) {
			console.log ( error )
		}
	}
	

	
	render(){
		let renderList = (this.state.loading) ? 
			<div>Carregando...</div> : 
			<ListTopics forumData={this.state.forumData} >
				<ForumTags tags={this.state.forumData.tags} />
			</ListTopics>
		return(
			<Fragment>
				
				<section className="forum-section">
					<PageTitle style={this.state.pageTitleColor} title="FORUM"/>
					<div className="forum-topico">
						{renderList}
					</div>
				</section>
			</Fragment>
		)
	}
}

export default Forum
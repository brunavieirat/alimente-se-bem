import React from 'react'
import './ListTopics.css'
 



const listTopics = (props) => {
	console.log(props.forumData)

	if(props.forumData){
		return (
			props.forumData.map((topics) => {
				let url = '/forum/topicos/detalhe?id=' + topics.id_Forum
				return (
					<div key={topics.id}>
						<a href={url} >
							<div className="design-border">
								<div className="left">
									<div className="forum-title list">
										<h1> {topics.titulo} </h1>
									</div>
									<br />
									{props.children}
								</div>
								<div className="right">
									<div className="forum-topico__post-lista right">
										<label className="forum-nut right"> {topics.nutricionista}</label>
										<br />
										<div className="right"> <label className="forum-data right-two"> {topics.data_Criacao} </label>
										</div>
									</div>
								</div>
							</div>	
						</a>	
					</div>
				)
			})
		)}
	
}
	
		


export default listTopics
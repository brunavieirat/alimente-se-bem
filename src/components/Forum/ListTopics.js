import React from 'react'
import './ListTopics.css'
 



const listTopics = (props) => {
	// console.log(props.forumData)

	if(props.forumData){
		return (
			props.forumData.map((topics) => {
				return (
					<div key={topics.id}>
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
					</div>
				)
			})
		)}
	
}
	
		


export default listTopics
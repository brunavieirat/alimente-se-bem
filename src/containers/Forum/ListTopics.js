import React from 'react'
// import getFromAPI from '../../services/APIServices'
import './ListTopics.css'
 



const listTopics = (props) => {
	console.log(props.forumData.nutricionistaName)

	if(props.forumData){
		return (
			props.forumData.map((topics) => {
				// let nutricionistaNome = getNutricionista(topics.id_Nutricionista)
				return (
					<div key={topics.id}>
						<div className="design-border">
							<div className="left">
								<div className="forum-title list">
									{/* <h1> {topics.nome} </h1> */}
									<h1> {topics.titulo} </h1>
								</div>
								<br />
								{props.children}
							</div>
							<div className="right">
								<div className="forum-topico__post-lista right">
									<label className="forum-nut right"> {topics.id_Nutricionista}</label>
									<br />
									<div className="right"> <label className="forum-data right-two"> 28/03/2018 11:59 </label>
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
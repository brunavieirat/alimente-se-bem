import React from 'react'
import { isArray } from 'util'
import './ForumTopic.css'

// const newLocal = ' Esse eh do commments ';
const forumComments = ( props ) => {
	// console.log (isArray(props.comments))
    
	if(props.comments && isArray(props.comments) )
		return(
			props.comments.map( comments => (
				<div key={comments.id}>
					<div>
						<div>
							<label className="forum-user"> {comments.id_User} </label>
							<label className="forum-data__resp"> {comments.data_Criacao}</label>
						</div>
						<div>
							<label className="forum-topico__respUser">
								{comments.descricao}
							</label>
						</div>
					</div> 
				</div>
			)
			)   
		)
}

export default forumComments

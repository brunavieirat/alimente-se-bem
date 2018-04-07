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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis mauris, et volutpat mauris rutrum hendrerit. Maecenas posuere, risus vel hendrerit dictum, velit lectus venenatis massa, sed varius ex augue vel mauris. Integer non gravida magna. Nam ac rutrum sem. Donec vel feugiat orci, nec facilisis libero. Aenean condimentum a lorem id dapibus. Cras purus nulla, commodo quis gravida nec, hendrerit sed enim. Phasellus suscipit magna sed nunc vehicula dignissim. Ut vitae fermentum nisi, a aliquet orci. Donec rutrum condimentum sem, et imperdiet ante. Maecenas molestie tristique metus sit amet dictum. Vivamus sed vulputate mauris. Sed et est magna. Donec condimentum condimentum orci, quis blandit lorem malesuada vitae. Etiam ut mauris sed orci tincidunt pharetra consequat eu ante.
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

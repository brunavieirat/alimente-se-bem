import React from 'react'

const forumAddComment = ( props ) => {
	return(
		<form className="forum-topico__resp">
			<label className="forum-user__post"> Nome usuário </label>
			{/* <label className="forum-data__resp"> 28/03/2018 11:59 </label> */}

			<div className="forum-post">
				<textarea className="forum-topico__respUserTextarea">

				</textarea>

				<button className="btn-add"> Publicar </button>
			</div>
		</form>
	)
}

export default forumAddComment
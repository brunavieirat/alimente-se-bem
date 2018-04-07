import React, { Fragment } from 'react'
import Tags from './ForumTags'
import Comments from './ForumComments'
import './ForumTopic.css'
import ForumAddComment from './ForumAddComment'


const forumTopic = (props) => {
	// console.log ( props )
	let comments = ''
	if( props.comments){
		comments = props.comments
	}
	
	return (
		<Fragment>
			{/* <AddTopico /> */}
			<section className="forum-topico">
				<div className="forum-title">
					<h1> {props.title} </h1>
				</div>
				<Tags tags={props.tags} />
				<div className="forum-topico__post">
					<label className="forum-nut"> {props.nutricionista}</label>
					<label className="forum-data"> {props.data_Criacao} </label>
					<br />
					<br />
					<br />
					<br />
					<label className="forum-topico__desc">
						{props.descricao}
					</label>
				</div>

				<div className="forum-qtdResp"> Comentários </div>
				{(comments) ? <Comments comments={comments}/> : null}

				<ForumAddComment />


			</section>
		</Fragment>
	)
}

export default forumTopic

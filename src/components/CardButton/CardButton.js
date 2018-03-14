import React from 'react'
import Paper from 'material-ui/Paper'
import './CardButton.css'



const CardButton = (props) => (
	<div className="card-container" >
		<Paper className="card-button" zdepth={1}> {props.title} </Paper>
		{/* <Paper style={style} zdepth={2} />
		<Paper style={style} zdepth={3} />
		<Paper style={style} zdepth={4} />
		<Paper style={style} zdepth={5} /> */}
	</div>
)

export default CardButton
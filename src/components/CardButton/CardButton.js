import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
	height: 300,
	width: 300,
	margin: 20,	
	display: 'flex',
}

const styleDiv = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-beteween',
}

const CardButton = (props) => (
	<div style={styleDiv} >
		<Paper style={style} zdepth={1}> {props.title} </Paper>
	</div>
)

export default CardButton
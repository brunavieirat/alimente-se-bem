import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
	height: 200,
	width: 200,
	margin: 20,	
	display: 'flex',
	
}

const styleDiv = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-beteween',
}

const CardButton = () => (
	<div style={styleDiv} >
		
		<Paper style={style} zdepth={1}> Teste </Paper>
		<Paper style={style} zdepth={2} />
		<Paper style={style} zdepth={3} />
		<Paper style={style} zdepth={4} />
		<Paper style={style} zdepth={5} />
	</div>
)

export default CardButton
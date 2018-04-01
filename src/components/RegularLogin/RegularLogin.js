import React, { Fragment } from 'react'
import './RegularLogin.css'

const regularLogin = (props) => (
	<Fragment>
		<label className="login-label">Email</label>
		<input ref={props.inputEmail} type="text" name="email"/>
		<label className="login-label">Senha</label>
		<input ref={props.inputPassword} type="password" name="password" />
		<button className="login-button" onClick={props.tryLogin} >Entrar</button>
	</Fragment>
)
export default regularLogin 
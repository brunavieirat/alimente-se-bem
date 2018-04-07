import React, { Fragment } from 'react'
import './RegularLogin.css'

const regularLogin = (props) => (
	<Fragment>
		<div className="login-container" >
			<img name="slide" width="50%" height="auto" src="/assets/images/footer-img.png"/>
			<label className="login-label">Email</label>
			<input ref={props.inputEmail} type="text" name="email"/>
			<label className="login-label">Senha</label>
			<input ref={props.inputPassword} type="password" name="password" />
			<br />
			<button className="login-button" onClick={props.tryLogin} >Entrar</button>
			<p>Ou se preferir, faça login com as redes sociais</p>
		</div> 
	</Fragment>
)
export default regularLogin 
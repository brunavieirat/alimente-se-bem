import React, {Component, Fragment} from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import RegularLogin from '../../components/RegularLogin/RegularLogin'
import {PostData} from '../PostData'
import {Redirect} from 'react-router-dom'
import './Login.css'
import  getFromAPI  from '../APIServices'
import { isArray } from 'util'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginError: false,
			redirect: false,
			nutricionistas: null
		}
		this.signup = this.signup.bind(this)
		this.tryLogin = this.tryLogin.bind(this)
		this.prepareToLogin = this.prepareToLogin.bind (this)
	}


	tryLogin = () => {
		if( this.validation(this.inputEmail.value, this.inputPassword.value)){
			this.checkLogin(this.inputEmail.value, this.inputPassword.value)
		}
			
	}

	validation( email, password  ){
		return (email && password) ? true : alert('Por favor, preencha o email e a senha.')
	}	

	checkReponse( status ){
		return (status === 200)
	}

	async checkLogin(email, password){
		let url = 'Nutricionistas/Login?email=' + email + '&nif=' + password
		try { 
			const response = await getFromAPI(url)
			console.log (response )
			if(response.status === 200 && (isArray(response.data) && response.data.length !== 0 ))
				this.login( response.data )
		}catch (error){
			console.log(error)
		}
	}

	login( userData ){
		localStorage.setItem('logged', true)
		localStorage.setItem ('userData',  JSON.stringify(userData))
		window.location.href='/home'
	}

	signup(res, type) {
		let postData
		if (type === 'facebook' && res.email) {
			postData = {
				name: res.name,
				provider: type,
				email: res.email,
				provider_id: res.id,
				token: res.accessToken,
				provider_pic: res.picture.data.url
			}
		}

		if (type === 'google' && res.w3.U3) {
			postData = {
				name: res.w3.ig,
				provider: type,
				email: res.w3.U3,
				provider_id: res.El,
				token: res.Zi.access_token,
				provider_pic: res.w3.Paa
			}
		}

		if (postData) {
			PostData('signup', postData).then((result) => {
				let responseJson = result
				sessionStorage.setItem('userData', JSON.stringify(responseJson))
				this.setState({redirect: true})
			})
		} else {
			alert( ' Quando não entra no postData precisa tratar o erro.' )
		}
	}

	render() {

		if (this.state.redirect || sessionStorage.getItem('userData')) {
			return (<Redirect to={'/home'}/>)
		}

		const responseFacebook = (response) => {
			console.log('facebook console')
			console.log(response)
			this.signup(response, 'facebook')
		}

		const responseGoogle = (response) => {
			console.log('google console')
			console.log(response)
			this.signup(response, 'google')
		}

		

		return (
			<Fragment>
				<div className="login-container">
					<RegularLogin 
						tryLogin={this.tryLogin} 
						inputPassword={el => this.inputPassword = el}
						inputEmail={el => this.inputEmail = el} 
					/>
					<div className="row body">
						<div className="medium-12 columns">
							<div className="medium-12 columns">

								<FacebookLogin
									appId="377964399342322"
									autoLoad={false}
									fields="name,email,picture"
									callback={responseFacebook}/>
								<br/><br/>

								<GoogleLogin
									clientId="505937548041-u6m5rdom3kcrfuo1m1ob3fh3gfbqjo2a.apps.googleusercontent.com"
									buttonText="Login with Google"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}/>

							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Login
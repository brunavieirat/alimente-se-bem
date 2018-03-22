import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import Login from './services/Login'


const isLogged = true


ReactDOM.render(
	<BrowserRouter>
		{isLogged ? <App />  : <Login/>}
	</BrowserRouter>,
	document.getElementById('root'))
registerServiceWorker()

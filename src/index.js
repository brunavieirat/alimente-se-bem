import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import DoLogin from './services/DoLogin'


const isLogged = true


ReactDOM.render(
	<BrowserRouter>
		{isLogged ? <App />  : <DoLogin/>}
		
		
	</BrowserRouter>,
	document.getElementById('root'))
registerServiceWorker()

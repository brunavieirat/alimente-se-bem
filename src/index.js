import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


import registerServiceWorker from './registerServiceWorker'
import Login from './services/Login/Login'


let logged = localStorage.getItem('logged') 
// console.log (logged)



ReactDOM.render(
	<BrowserRouter>
		{(logged === 'true') ? <App />  : <Login />}
	</BrowserRouter>,
	document.getElementById('root'))
registerServiceWorker()

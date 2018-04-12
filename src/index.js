import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import Login from './containers/Login/Login'

// import { Provider} from 'react-redux'
// import { combineReducers, createStore } from 'redux'

let logged = localStorage.getItem('logged') 
// console.log (logged)


ReactDOM.render(
	<BrowserRouter>
		{/* {(logged === 'false') ? <App />  : <Login />} */}
		<App />
	</BrowserRouter>,
	document.getElementById('root'))
registerServiceWorker()

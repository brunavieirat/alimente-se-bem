import React, {Component} from 'react'
import FaBars from 'react-icons/lib/fa/bars'
import FaUser from 'react-icons/lib/fa/user'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo-sesi.png'

const Menu = ({menuItem}) => {
	const menu = menuItem.map(item => (
		<Link key={item.url} className="navbar-pages__link" to={item.url} > {item.name} </Link>
	))
	return (
		<li>
			{menu}
		</li>
	)
} 

const menuItem = [
	{
		'name':'Home',
		'url':'/',
	},
	{
		'name':'Videos',
		'url':'/videos',
	},
	{
		'name':'Noticias',
		'url':'/noticias',
	},
	{
		'name':'Agenda',
		'url':'/agenda',
	},
	{
		'name':'Forum',
		'url':'/forum',
	},

]

export default class Navbar extends Component {
	
	render() {
		return(
			<nav className="navbar">
				<Link className="navbar-logo" to="/"> <img src={logo} alt="logo" className="logo"/></Link>
				<input id="menu-hamburguer" className="navbar-menu-input" type="checkbox" hidden />
				<label className="navbar-menu-label" htmlFor="menu-hamburguer"><FaBars className="navbar-menu-hamburguer" /></label>
				<ul className="navbar-pages" >
					<Menu menuItem={menuItem} className="navbar-pages__link"/>
				</ul>

				<div className="navbar-pages__link">| </div> 
             
				<div className="navbar-pages__link">
					<FaUser/>
				</div>
			</nav>
		)}
}

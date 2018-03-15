import React from 'react'
import FaBars from 'react-icons/lib/fa/bars'
import FaUser from 'react-icons/lib/fa/user'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/images/Sesi-logo.png'
import Menu , { menuItem } from '../Menu/Menu'
import MdMoreVert from 'react-icons/lib/md/more-vert'


const navbar = () => (
	
	<nav className="navbar">
		<Link className="navbar-logo" to="/"> <img src={logo} alt="logo" className="logo"/></Link>
		<input id="menu-hamburguer" className="navbar-menu-input" type="checkbox" hidden />
		<label className="navbar-menu-label" htmlFor="menu-hamburguer"><FaBars className="navbar-menu-hamburguer" /></label>
		<ul className="navbar-pages">
			<Menu className="navbar-pages__link" menuItem={menuItem} />
		</ul>
		<div className="navbar-pages__login"> <MdMoreVert className="navbar-pages__login-style"/></div> 
             
		<div className="navbar-pages__login">
		
			<FaUser/>
		</div>
	</nav>
)

export default navbar

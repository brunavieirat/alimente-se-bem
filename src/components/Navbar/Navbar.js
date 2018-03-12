import React, {Component} from 'react'
import FaBars from 'react-icons/lib/fa/bars'
import FaUser from 'react-icons/lib/fa/user'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo-sesi.png'
import Menu, { menuItem } from '../Menu/Menu'




const Navbar = () => (
	
			<nav className="navbar">
				<Link className="navbar-logo" to="/"> <img src={logo} alt="logo" className="logo"/></Link>
				<input id="menu-hamburguer" className="navbar-menu-input" type="checkbox" hidden />
				<label className="navbar-menu-label" htmlFor="menu-hamburguer"><FaBars className="navbar-menu-hamburguer" /></label>
				<ul className="navbar-pages">
					<Menu className="navbar-pages__link" menuItem={menuItem} />
				</ul>				
			

			<div className="navbar-pages__link">| </div> 
             
			<div className="navbar-pages__link">
				<FaUser/>
			</div>
			</nav>
		)

export default Navbar

// export default class Navbar extends Component {
	
// 	render() {
// 		return(
// 			<nav className="navbar">
// 				<Link className="navbar-logo" to="/"> <img src={logo} alt="logo" className="logo"/></Link>
// 				<input id="menu-hamburguer" className="navbar-menu-input" type="checkbox" hidden />
// 				<label className="navbar-menu-label" htmlFor="menu-hamburguer"><FaBars className="navbar-menu-hamburguer" /></label>
// 				<ul className="navbar-pages">
// 					<Menu menuItem={menuItem} />
// 				</ul>

// 				<div className="navbar-pages__link">| </div> 
             
// 				<div className="navbar-pages__link">
// 					<FaUser/>
// 				</div>
// 			</nav>
// 		)}
// }

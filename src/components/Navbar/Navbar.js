import React from 'react'
import FaBars from 'react-icons/lib/fa/bars'
import FaUser from 'react-icons/lib/fa/user'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from './logo-sesi.png'

const Navbar = () => (
    
	<nav className="navbar">
		<Link className="navbar-logo" to="/"> <img src={logo} alt="logo" className="logo"/></Link>


		<input id="menu-hamburguer" className="navbar-menu-input" type="checkbox" hidden />
		<label className="navbar-menu-label" htmlFor="menu-hamburguer"><FaBars class="navbar-menu-hamburguer" /></label>
		<ul className="navbar-pages">
			<li>
				<Link className="navbar-pages__link" to="/"> Home </Link>
			</li>
           
			<li>
                
				<Link className="navbar-pages__link" to="/cursos"> Cursos </Link>
			</li>

			<li>
                
				<Link className="navbar-pages__link" to="/noticias"> Notícias </Link>
			</li>

			<li>
                
				<Link className="navbar-pages__link" to="/agenda"> Agenda </Link>
			</li>

			<li>
                
				<Link className="navbar-pages__link" to="/forum"> Fórum </Link>
			</li>  
           
		</ul>

		<div className="navbar-pages__link">| </div> 
             
		<div className="navbar-pages__link">
			<FaUser/>
		</div>
	</nav>

   
)


export default Navbar


import React from 'react'
import FaBars from 'react-icons/lib/fa/bars'
import FaUser from 'react-icons/lib/fa/user'
import './navbar.css'
import logo from './logo-sesi.png'

export default props => (

    <nav className="navbar">
        {/* <h1 className="navbar-logo">
            <Link className="navbar-logo__link" to="/">Post-It</Link>
        </h1> */}
        {/* <div className="navbar-logo"> */}
        <a href="#" className="navbar-logo"> <img src={logo}/></a>
        {/* </div> */}

        <input id="menu-hamburguer" className="navbar-menu-input" type="checkbox" hidden />
        <label className="navbar-menu-label" htmlFor="menu-hamburguer"><FaBars /></label>
        <ul className="navbar-pages">
            <li >
                {/* <Link className="navbar-pages__link" to="/quem-somos">
                    Quem somos
                </Link> */}
                <a href="#" className="navbar-pages__link"> Home </a>
            </li>
           
            <li>
                
                <a href="#" className="navbar-pages__link"> Cursos </a>
            </li>

             <li>
                
                <a href="#" className="navbar-pages__link"> Notícias </a>
            </li>

             <li>
                
                <a href="#" className="navbar-pages__link"> Agenda </a>
            </li>

             <li>
                
                <a href="#" className="navbar-pages__link"> Fórum </a>
            </li>  
           
        </ul>

        <div className="navbar-pages__link">| </div> 
             
             <div className="navbar-pages__link">
             <FaUser/>
             </div>
    </nav>

    





//     </ul>

// </nav>
)


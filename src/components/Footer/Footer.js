import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../Footer/Footer.css'
import Menu, { menuItem } from '../Menu/Menu'
import FaFacebook from 'react-icons/lib/fa/facebook-official'


const Footer = () => (

				<div className="footer">
                <div className="menu-footer">
                	<ul>
					<Menu menuItem={menuItem} />
				</ul>
                </div>
                <div className="sesi-footer">
                <div>
                    SESI@2018 
                     </div>

                <div>
                    -Todos os direitos reservados - 
                    </div>
                <div> <FaFacebook/> </div>
                </div>

    </div>
					


)

export default Footer
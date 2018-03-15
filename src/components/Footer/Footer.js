import React from 'react'
import '../Footer/Footer.css'
import Menu, { menuItem } from '../Menu/Menu'
import FaFacebook from 'react-icons/lib/fa/facebook-official'


const Footer = (props) => (

	<div className="footer">
		<div className="menu-footer">
			<ul>
				<Menu menuItem={menuItem} />
			</ul>
		</div>

		<div className="sesi-footer">	
                   
			
                    -  Todos os direitos reservados - 
			
			{/* <div> <FaFacebook/> </div> */}
		</div>

	</div>
					


)

export default Footer
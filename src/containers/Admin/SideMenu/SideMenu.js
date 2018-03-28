import React from 'react'
import { Link } from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { faCalendarAlt } from '@fortawesome/fontawesome-free-solid'
import { faFileVideo } from '@fortawesome/fontawesome-free-solid'
import { faNewspaper } from '@fortawesome/fontawesome-free-solid'
import { faFileExcel } from '@fortawesome/fontawesome-free-solid'
import { faCommentAltSmile } from '@fortawesome/fontawesome-free-solid'

import "./SideMenu.css"

class SideMenu extends React.Component {
  state = {
    itemsMenu: [
      {
        image: faFileVideo,
        name: 'Vídeos',
        url: '/admin'
      },
      {
        image: faCalendarAlt,
        name: 'Agenda',
        url: '/admin'
      },
      {
        image: faNewspaper,
        name: 'Notícias',
        url: '/admin'
      },
      {
        image: faFileExcel,
        name: 'Relatórios',
        url:'/admin'
      },
      {
        image: faFileExcel,
        name: 'Relatórios',
        url:'/admin'
      }
    ]
  };

  render() {
    const { itemsMenu } = this.state;

    return (
      <div className="menu-left">
        <div className="logo-admin">Alimente-se Bem</div>
        {itemsMenu.map((item, index) => (
          <div className="side-menu" key={index} onClick={this.onCLickOption}>
            <Link className="side-menu-link" key={index}  to={item.url}>                            
              
              <FontAwesomeIcon className="ic-option" icon={item.image}  />

              <span className="name-option"> {item.name} </span>
            </Link>
            
          </div>
        ))}
      </div>
    );
  }
}

export default SideMenu;

import React from 'react'
import { Link } from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { faCalendarAlt } from '@fortawesome/fontawesome-free-solid'
import { faFileVideo } from '@fortawesome/fontawesome-free-solid'
import {faNewspaper} from '@fortawesome/fontawesome-free-solid'
import {faFileExcel} from '@fortawesome/fontawesome-free-solid'

import "./SideMenu.css"

class SideMenu extends React.Component {
  state = {
    itemsMenu: [
      {
        image: faFileVideo,
        name: 'Vídeos',
        url: '/videos'
      },
      {
        image: faCalendarAlt,
        name: 'Agenda',
        url: '/agenda'
      },
      {
        image: faNewspaper,
        name: 'Notícias',
        url: '/noticias'
      },
      {
        image: faFileExcel,
        name: 'Relatório',
        url:''
      }
    ]
  };

  render() {
    const { itemsMenu } = this.state;

    return (
      <div className="menu-left">
        <div className="logo">LearnIt</div>
        {itemsMenu.map((item, index) => (
          <div className="side-menu" key={index} onClick={this.onCLickOption}>
            <Link className="ic-option" key={item.url}  to={item.url}>
                            
              
              <FontAwesomeIcon icon={item.image}  />
            </Link>
            <span className="name-option"> {item.name} </span>
          </div>
        ))}
      </div>
    );
  }
}

export default SideMenu;

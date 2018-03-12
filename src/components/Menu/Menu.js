import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({menuItem}) => {
	const menu = menuItem.map(item => (
		<Link className="navbar-pages__link" key={item.url}  to={item.url} > {item.name} </Link>
	))
	return (
		<li >
			{menu}
		</li>
	)
} 

export const menuItem = [
	{
		'name':'Home',
		'url':'/',
	},
	{
		'name':'Vídeos',
		'url':'/videos',
	},
	{
		'name':'Notícias',
		'url':'/noticias',
	},
	{
		'name':'Agenda',
		'url':'/agenda',
	},
	{
		'name':'Fórum',
		'url':'/forum',
	},

]

export default Menu
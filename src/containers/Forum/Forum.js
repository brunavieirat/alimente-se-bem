import React, { Fragment, Component } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import CardButton from '../../components/CardButton/CardButton'
import bgImage from '../../assets/images/image-05.jpeg'
import './Forum.css'


export default class Forum extends Component {
	constructor(props){
		super(props)
		this.state = {
			pageTitleColor: {
				background: '#ADC837',
			},
			sectionStyle: {
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundImage: `url(${bgImage})`,
				height: '800px',
			}
			
		}
	}
	render(){
		
		return(
			<Fragment>
				<section style={this.state.sectionStyle} className="forum-section">
					<PageTitle style={this.state.pageTitleColor} title="Forum" />
					<CardButton />
				</section>
			</Fragment>
		)
	}
}
import React, {Component} from 'react'
import Category from '../components/Category/Category'
import CardVideo from '../components/CardVideo/CardVideo'
import SectionVideos from '../components/SectionVideos/SectionVideos'

export default class Videos extends Component {

	render(){
		return(
			<section>
				{/*<Category />
				<CardVideo />*/}
				<SectionVideos/>
				
			</section>

		)
	}
}
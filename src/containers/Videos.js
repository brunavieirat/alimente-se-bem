import React, {Component} from 'react'
import Category from '../components/Category/Category'
import CardVideo from '../components/CardVideo/CardVideo'

export default class Videos extends Component {

	render(){
		return(
			<section>
				<Category />
				<CardVideo />
			</section>

		)
	}
}
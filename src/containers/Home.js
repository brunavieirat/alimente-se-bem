import React, { Component, Fragment } from 'react'
import { Carousel } from 'antd'

class Home extends Component{

	render(){
		return(
			<Fragment>
				<Carousel autoplay>
					<div><h3>1</h3></div>
					<div><h3>2</h3></div>
					<div><h3>3</h3></div>
					<div><h3>4</h3></div>
				</Carousel>
			</Fragment>
		)
	}
}

export default Home
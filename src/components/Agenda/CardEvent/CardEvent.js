import React, { Fragment } from 'react'
import './CardEvent.css'

import { Card, Modal  } from 'antd'
import 'antd/lib/card/style/css'
import 'antd/lib/modal/style/css'
import sucos from './sucos.jpg'



class CardEvent extends React.Component {
	state = {
		visible: false,
	}

	showModal = () =>  {
		this.state.visible = true;
		this.setState({
			visible: true,
		});
	}

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	}

	handleOk = () => {
		this.setState({
			visible: false,
		});
	}


	render() {
		return (
			<Fragment>
				<Card
					className="cardEvent"
					cover={<img alt="example" src={sucos} />}
				>
					<div className="cardEvent-date">
						<p> 24 <br />MAR </p>
					</div>
					<div className="cardEvent-title">
						<p> SUCOS DETOX </p>
					</div>
					<div className="cardEvent-place">
						<p> SESI Santos </p>
					</div>
					<div className="cardVideo-info-secundary">
						<a href="#" onClick={this.showModal}> Mais Informações </a>
					</div>
				</Card>
				<Modal
					title="Basic Modal"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</Fragment>
		);
	}
}

export default CardEvent
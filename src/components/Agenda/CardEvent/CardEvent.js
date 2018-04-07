import React, { Fragment } from 'react'
import './CardEvent.css'

import { Card, Modal } from 'antd'
import 'antd/lib/card/style/css'
import 'antd/lib/modal/style/css'


class CardEvent extends React.Component {
	state = {
		visible: false,
	}

	showModal = () => {
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
					cover={
					<img alt="example" 
					src={this.props.urlImagem} 
					className="cardEvent-img"
					/>}
				>
					<div className="cardEvent-date">
						<label> {this.props.dateday} <br />
							{this.props.datemonth}</label>
					</div>
					<div className="cardEvent-title">
						<label> {this.props.title} </label>
					</div>
					<div className="cardEvent-place">
						<label> {this.props.place} </label>
					</div>
					<div className="cardVideo-info-secundary">
						<a href="#"
							onClick={this.showModal}>
							Mais Informações
						 </a>
					</div>
				</Card>
				<Modal
					wrapClassName="modal"
					title={this.props.title}
					visible={this.state.visible}
					onOk={this.handleOk}
					okText="Tenho interesse"
					onCancel={this.handleCancel}
					cancelText="Cancelar"
				>
					<div className="modal-img">
						<img className="modal-img" alt="example" src={this.props.urlImagem} />
					</div>
					<label className="modal-description">
						{this.props.descricao}
						</label>
					<label> {this.props.place} </label>

				</Modal>
			</Fragment>
		)
	}
}

export default CardEvent
import React, { Fragment } from 'react'
import './CardEvent.css'

import { Card, Modal } from 'antd'
import 'antd/lib/card/style/css'
import 'antd/lib/modal/style/css'
import sucos from './sucos.jpg'



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
					cover={<img alt="example" src={sucos} />}
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
				>
					<div className="modal-img">
						<img className="modal-img" alt="example" src={sucos} />
					</div>
					<label className="modal-description">
						Nessa próxima parte do código, vamos chamar o método document.write, que tem a função de escrever na tela. Dentro, nós colocaremos o código principal, responsável pela criação das datas. O que se encontra dentro de aspas, a partir de agora, será um texto; e o que estiver fora de aspas, será o tal código que deveremos estudar.
	
	O getDay() irá mostrar o dia da semana. É preciso saber que no JavaScript, na maioria das vezes, uma contagem começa com o número zero. Então, domingo vale zero, segunda vale um, terça vale dois, e assim por diante.
	
	O getDate(), por sua vez, equivale ao dia do mês, não tendo a mesma regra de antes de só começar em zero.
	
	Já o getMonth() e o getFullYear(), equivalem, respectivamente, ao mês e ao ano, e o mês, como o dia da semana, começa em zero, logo, julho não é mês sete, mas mês seis.
	
	É lógico que em um site decente, o usuário não será obrigado a saber disso, por isso, nós criaremos arrays, que são conjuntos de informações compactas.
</label>
					<label> {this.props.place} </label>

				</Modal>
			</Fragment>
		)
	}
}

export default CardEvent
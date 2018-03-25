
import React, { Component } from 'react'
import { Card } from 'antd'
import 'antd/lib/card/style/css'
import './CardEvent.css'



class CardEvent extends Component {

render () {
	return (

		<Card className="cardEvent"
    // style={{ width: 300 }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    >
	<p> Teste </p>
  </Card>

	)
}

}

export default CardEvent
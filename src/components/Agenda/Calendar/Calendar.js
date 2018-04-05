import React, { Component } from 'react'
// import Calendar from 'react-calendar'
import { Calendar} from 'antd'
import 'antd/lib/calendar/style/css'
// import 'antd/lib/Badge/style/css'
import './Calendar.css'
import moment from 'moment'
import 'moment/locale/pt-br'

// function onPanelChange(value, mode) {
// 	console.log(value, mode);
// }



class Calendario extends Component {


	render() {
		return (
			
			<div className="calendar">
				<Calendar
				onSelect={this.props.onSelect}
					fullscreen={false}
				/>
			</div>
		)
	}
}

export default Calendario

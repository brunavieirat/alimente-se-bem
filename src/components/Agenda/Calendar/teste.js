import React, { Component } from 'react' 
// import Calendar from 'react-calendar'
import { Calendar, Badge } from 'antd'
import 'antd/lib/calendar/style/css'
// import 'antd/lib/Badge/style/css'
import './teste.css'
import moment from 'moment'
import 'moment/locale/pt-br'

function onPanelChange(value, mode) {
	console.log(value, mode);
  }
  


class Teste extends Component {

	render(){
		return(
			<div className="calendar">
				<Calendar 
				// dateCellRender={dateCellRender} 
				// monthCellRender={monthCellRender}
				onPanelChange={onPanelChange}
				fullscreen={false}
				 
				 
					/>
			</div>
		)
	}
}

export default Teste

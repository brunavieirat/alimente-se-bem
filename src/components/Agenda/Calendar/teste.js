import React, { Component } from 'react' 
import Calendar from 'react-calendar'
// import { Calendar, Badge } from 'antd'
import './teste.css'

class Teste extends Component {
    state = {
      date: new Date(),
      locale: "PT-BR"
    }
   
    onChange = date => this.setState({ date })
   
    render() {
      return (
        <div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            locale={this.locale}
          />
          {/* // <Calendar date={moment("23/10/2015", "DD/MM/YYYY")} onSelect={this.onSelect} /> */}
        </div>
      )
    }
  }

  export default Teste



// function getListData(value) {
//   let listData;
//   switch (value.date()) {
//     case 8:
//       listData = [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'success', content: 'This is usual event.' },
//       ]; break;
//     case 10:
//       listData = [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'success', content: 'This is usual event.' },
//         { type: 'error', content: 'This is error event.' },
//       ]; break;
//     case 15:
//       listData = [
//         { type: 'warning', content: 'This is warning event' },
//         { type: 'success', content: 'This is very long usual event。。....' },
//         { type: 'error', content: 'This is error event 1.' },
//         { type: 'error', content: 'This is error event 2.' },
//         { type: 'error', content: 'This is error event 3.' },
//         { type: 'error', content: 'This is error event 4.' },
//       ]; break;
//     default:
//   }
//   return listData || [];
// }

// function dateCellRender(value) {
//   const listData = getListData(value);
//   return (
//     <ul className="events">
//       {
//         listData.map(item => (
//           <li key={item.content}>
//             <Badge status={item.type} text={item.content} />
//           </li>
//         ))
//       }
//     </ul>
//   );
// }

// function getMonthData(value) {
//   if (value.month() === 8) {
//     return 1394;
//   }
// }

// function monthCellRender(value) {
//   const num = getMonthData(value);
//   return num ? (
//     <div className="notes-month">
//       <section>{num}</section>
//       <span>Backlog number</span>
//     </div>
//   ) : null;
// }

// class Teste extends Component {

//   render(){
//     return(

//       <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />)

    
//   }
// }

//   export default Teste

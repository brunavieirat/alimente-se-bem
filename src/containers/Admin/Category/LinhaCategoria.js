import React, { Component } from 'react'
import './LinhaCategoria.css'


class LinhaCategoria extends Component{


    onClick = (e) =>{
        const { deleteByIndex} = this.props
        e.preventDefault()
        deleteByIndex(this.props.index)
    }

    render(){

        return(
            <tr>
            <td> {this.props.id} </td>
            <td> {this.props.nome} </td>
            <td>
          <button className="btn-remove" onClick={this.onClick}>×</button>
        </td>
        </tr>
        )
    }

    

}
export default LinhaCategoria
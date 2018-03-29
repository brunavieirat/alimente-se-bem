import React, { Component } from 'react'
import './LinhaCategoria.css'


class LinhaCategoria extends Component{

    state={

        edit: false
    }

    onClick = (e) =>{
        const { deleteByIndex} = this.props
        e.preventDefault()
        deleteByIndex(this.props.id)
    }

    onEdit = (e) => {

            <tr>
            <td> 
            <label> {this.props.id} </label>
            </td>
            <td>
                <input />
                </td>
            <td>
          <button className="btn-remove" onClick={this.onClick}>×</button>
        </td>
        <td>
          <button className="btn-remove" > Editar</button>
        </td>
        </tr>
        
    }

    render(){

        return(

                       <tr>
            <td> 
            <label> {this.props.id} </label>
            </td>
            <td>
                <label> {this.props.nome} </label>
                </td>
            <td>
          <button className="btn-remove" onClick={this.onClick}>×</button>
        </td>
        <td>
          <button className="btn-remove" onClick={this.onEdit} > Editar</button>
        </td>
        </tr>
            
       
        )
    }
    

    

}
export default LinhaCategoria
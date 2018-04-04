import React, { Component } from 'react'
import './LinhaCategoria.css'


class LinhaCategoria extends Component{

    state={

        
    }

    onClick = (e) =>{
        const { deleteByIndex} = this.props
        e.preventDefault()
        deleteByIndex(this.props.id)
    }

    onClickEditar = (e) =>{
        const { edit } = this.props
        console.log('props linha categoria' + this.props)
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
          <button className="btn-remove" onClick={this.onClickEditar} > Editar</button>
        </td>
        </tr>
            
       
        )
    }
    

    

}
export default LinhaCategoria
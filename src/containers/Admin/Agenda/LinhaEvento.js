import React from 'react'

import './LinhaEvento.css'

const {categoria} = this.props

const LinhaEvento = (props) =>{

<tr key={categoria.id}>
            <td> {categoria.id} </td>
            <td> {categoria.nome} </td>
            <td>
          <button className="btn-remove" onClick={this.onClick}>×</button>
        </td>
        </tr>


}
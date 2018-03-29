import React, { Component } from 'react'
import './ListaCategoria.css'

import LinhaCategoria from './LinhaCategoria'


class ListaCategoria extends Component {
         
     
            render(){

                const {categorias, deleteByIndex} = this.props

            return (
                <div className="card StudentList">
                <table>
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th> Nome </th>
                      </tr>
                  </thead>
                  <tbody>
                        
        
        
        {categorias.map((categoria, index) => (
            
            <LinhaCategoria
            index={index}
            key={categoria.id}
            id={categoria.id}
            nome={categoria.nome}
            deleteByIndex={deleteByIndex}

            
            />
        
        ))
        
            }

                      </tbody>
                      </table>
                      </div>
            )
        }


}
export default ListaCategoria

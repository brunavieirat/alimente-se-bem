import React from 'react'
import './CategoryList.css'


const ListCategory =(props) =>{

    
    const renderRows = () =>{
        const categorias = props.categorias || []
        
        return categorias.map(categoria => (
        
            <tr key={categoria.id}>
            <td> {categoria.id} </td>
            <td> {categoria.nome} </td>
            <td>
          <button className="btn-remove" onClick={this.onClick}>×</button>
        </td>
        </tr>
        ))
        
            }

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
        
                      {renderRows()}
                      </tbody>
                      </table>
                      </div>
            )
    


}
export default ListCategory

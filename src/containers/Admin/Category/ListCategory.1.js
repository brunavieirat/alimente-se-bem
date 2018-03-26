import React from 'react'


const ListCategory =(props) =>{
    const renderRows = () =>{
        const categorias = props.categorias || []
        
        return categorias.map(categoria => (
        
            <tr>
            <td> {categoria.nome} </td>
        </tr>
        ))
        
            }

            return (

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
            )
    


}
export default ListCategory

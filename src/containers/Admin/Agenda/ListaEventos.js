import React, { Component } from 'react'


import LinhaEvento from './LinhaEvento'



class ListaEventos extends Component {
         
     
            render(){

                const {eventos, categorias, deleteByIndex} = this.props

            return (
                <div className="card StudentList">
                <table>
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th> Título </th>
                      {/* <th> Descrição </th> */}
                      <th> Data do Evento </th>
                      {/* <th> Link </th> */}
                      
                      </tr>
                  </thead>
                  <tbody>
                        
        
        
        {eventos.map((evento) => (
            
            <LinhaEvento
            
            key={evento.id}
            id={evento.id}
            titulo={evento.titulo}
            descricao={evento.descricao}
            url_Imagem={evento.url_Imagem}
            tag={evento.tag}
            valor={evento.valor}
            data_Evento={evento.data_Evento}
            deleteByIndex={deleteByIndex}
            evento={evento}
           // categorias={categorias}
                        
            />
        
        ))
        
            }

                      </tbody>
                      </table>
                      </div>
            )
        }


}
export default ListaEventos

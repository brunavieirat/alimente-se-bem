import React, { Component } from 'react'


import LinhaVideo from './LinhaVideo'
import './AdminVideos.css'


class ListaVideo extends Component {
         
     
            render(){

                const {videos, categorias, deleteByIndex} = this.props

            return (
                <div className="card StudentList">
                <table>
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th> Título </th>
                      {/* <th> Descrição </th> */}
                      <th> URL </th>
                      {/* <th> Link </th> */}
                      
                      </tr>
                  </thead>
                  <tbody>
                        
        
        
        {videos.map((video) => (
            
            <LinhaVideo
            
            key={video.id}
            id={video.id}
            titulo={video.titulo}
            descricao={video.descricao}
            url={video.url}
            link_Externo={video.link_Externo}
            id_Cat_Videos={video.id_Cat_Videos}
            deleteByIndex={deleteByIndex}
            video={video}
            categorias={categorias}
            
            
            />
        
        ))
        
            }

                      </tbody>
                      </table>
                      </div>
            )
        }


}
export default ListaVideo

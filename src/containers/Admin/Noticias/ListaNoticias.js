import React, { Component } from 'react'


import LinhaNoticia from './LinhaNoticia'


class ListaNoticia extends Component {
   
     
            render(){

                const {noticias, categorias, deleteByIndex} = this.props

            return (
                <div className="card StudentList">
                <table>
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th> Título </th>
                      <th> Descrição </th>
                      {/* <th> URL </th> */}
                      <th> Link </th>
                      <th> Categoria </th>
                      </tr>
                  </thead>
                  <tbody>
                        
        
        
        {noticias.map((noticia) => (
            //  titulo: '',
            //  headline: '',
            //  descricao: '',
            //  imagem:'',
            //  link_Externo: '',
            //  id_Cat_Noticias:''
            <LinhaNoticia
            
            key={noticia.id}
            id={noticia.id}
            titulo={noticia.titulo}
            headline={noticia.headline}
            descricao={noticia.descricao}
            url={noticia.url}
            link_Externo={noticia.link_Externo}
            id_Cat_Videos={noticia.id_Cat_Videos}
            deleteByIndex={deleteByIndex}         
            noticia={noticia}
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
export default ListaNoticia

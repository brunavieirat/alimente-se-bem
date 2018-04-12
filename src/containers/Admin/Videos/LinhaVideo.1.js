import React from 'react'



const {video} = this.props

const LinhaVideo = (props) =>{

    
<tr key={video.id}>
            <td> {video.id} </td>
            <td> {video.titulo} </td>
            <td> {video.descricao} </td>
            <td> {video.url} </td>
            <td> {video.link_Externo} </td>
            <td> {video.id_Cat} </td>
<td>
          <button 
          className="btn-remove" 
          onClick={this.onClick}>
          ×
          </button>
        </td>
        </tr>


}
export default LinhaVideo
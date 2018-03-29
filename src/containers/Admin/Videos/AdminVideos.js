import React, { Component } from 'react'
import { postFromAPI } from '../../../services/APIServices'

import AddVideos from './AddVideos'
import './AdminVideos.css'



class AdminVideos extends Component{

    state = {
                            
            videos: []
        
    }

onClickCad=(video)=>{    
    postFromAPI('Videos/Cadastrar', video)
    .then(res=> alert('oooook'))
    .catch(error=> alert(error))
    console.log(video)
}

    render(){

        const {videos} = this.state
        return(

            <AddVideos onClickCad={this.onClickCad} />

        )

    }
}

export default AdminVideos
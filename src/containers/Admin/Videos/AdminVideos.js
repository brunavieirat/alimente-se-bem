import React, { Component } from 'react'
import { postFromAPI } from '../../../services/APIServices'

import AddVideos from './AddVideos'
import './AdminVideos.css'



class AdminVideos extends Component{

    state = {

        videos: []
    }

onClickCad=(video)=>{
    postFromAPI('/Videos/Cadastrar', video)
    .then(res=> console.log('oooook'))
    .catch(error=>console.log(error))
}

    render(){

        return(

            <AddVideos onClickCad={this.onClickCad} />

        )

    }
}

export default AdminVideos
import React, { Component } from "react"

class ListaVideos extends Component {
state={
    videos:{
        
    }
}

render() {


    return this.state.events.map((event) => {
        
        return (

            <CardVideo
                title={event.titulo}
                price={event.valor}
                description={event.descricao}
                url={event.url}
            />				
        )
        })
    }

}
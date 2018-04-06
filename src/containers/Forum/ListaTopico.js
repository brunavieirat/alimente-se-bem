import React, { Component } from 'react'
import axios from 'axios'

import './ListaTopicos.css'

import moment from 'moment'

class ListaTopico extends Component {

    state={
        topicos: []
    }

    componentDidMount(){
        axios.get('http://renatafelix-001-site1.gtempurl.com/api/Forum?sort=-createdAt')
        .then(res => {

          //  console.log(res.data)
            this.setState({
                ...this.state,
                topicos: res.data,
                              
        })
        console.log(this.state)
    })
  
}



listaTopico(){

    return this.state.topicos.map((topico)=>{
        return(

            
        //     <div className="forum-title list">
        //     <h1> {topico.titulo} </h1>
        // </div>

        
                <div className="design-border" key={topico.id}>
                    <div className="left">
                        <div className="forum-title list">
                            <h1> {topico.titulo} </h1>
                        </div>
                        <br />
                        <div className="forum-tags inline">
                            <label className="forum-tag"> frutas </label>

                            <label className="forum-tag"> nutrição </label>

                            <label className="forum-tag"> tag </label>
                        </div>
                    </div>
                    <div className="right">
                        <div className="forum-topico__post-lista right">
                            <label className="forum-nut right"> Meire Silva </label>
                            <br />
                            <div className="right"> <label className="forum-data right-two"> {moment(topico.data_Criacao).format('DD-MM-YYYY')} </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                


    )
})

}

// }
// return (
//     <option
    
//     key={categoria.id}
    
//     value={categoria.id}> {categoria.nome}</option>

//             )


// })

    render() {

        return (

            <section className="forum-topico" >
                



                {this.listaTopico()} 
              
                
                
            </section>
        )
    }
}

export default ListaTopico

import React, { Fragment, Component
} from 'react'

import PageTitle from '../components/PageTitle/PageTitle'

import getFromAPI from '../services/APIServices';


import Noticias from '../components/News/News'




export default class News extends Component {

    constructor(props){

        super(props)

        this.state = {

            pageTitleColor: {

                background: '#1AA0E1',

            },

            news: []

        }

    }

    

    componentWillMount() {

        getFromAPI('/Noticias').then(res=> {

            this.setState({

                news: res.data

            })

        })


    }




    renderNews() {

        

        return this.state.news.map((noticia)=> {

            return (

                <Noticias

                    key={noticia.id}

                    title={noticia.titulo}

                    headline={noticia.headline}

                    description={noticia.descricao}

                    image={noticia.imagem}

                />

            );

        })

    }







    render(){

        return(

            <Fragment>

                 <PageTitle style={this.state.pageTitleColor}
title="Notícias" /> 

                        {this.renderNews()}

                    </Fragment>

        )

    }

}
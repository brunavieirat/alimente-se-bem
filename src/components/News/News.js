
import React, { Fragment } from
'react'




class News extends React.Component
{

    state = {

        visible: false,

    }




    render() {

        return (

            <Fragment>

{this.props.title}

{this.props.headline}

{this.props.description}

            </Fragment>

        )

    }

}




export default News

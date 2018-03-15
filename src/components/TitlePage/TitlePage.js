import React from 'react'
import './TitlePage.css'

const titlePage =(props) =>(

    <div className="titlepage-style">
    <div className="titlepage-title">
    {props.titlePage}
    </div>
    </div>
)

export default titlePage
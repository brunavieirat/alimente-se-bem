import React from 'react'
import './Category.css'


const Category = (props) => (
	// <div {...props} className={"divCategoria"}>
	//     {children}
	// </div>

	//  render(){

	<div className="divCategoria">{props.name}	</div>
)

export default Category
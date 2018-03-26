import React from 'react'


const AddCategory = (props) =>{

    return(

        <div className="admin-category">
        <label> Categorias </label>
        <input onChange={props.onChangeCat}/>
        <button onClick={props.onClickCad}> Cadastrar </button>
        </div>
    )
}

export default AddCategory
import React from 'react'
import addImg from '../images/add.png'
import './styles/ButtonAdd.css'
import { Link } from 'react-router-dom'

const ButtonAdd = () =>{

    return (
        <Link to="/exercise/new" className='containerButton'>
            <img src={addImg} alt='imgButtonAdd'/>  
         </Link>
    )
}




export default ButtonAdd;
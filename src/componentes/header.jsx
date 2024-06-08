import React from 'react'
import './css/header.css'

function Header(){
    return(
        <nav>
            <img src='favicon.ico' alt="some stuff"/>
            <div className='inicio'>
                <h1>Aprendendo React</h1>
            </div>
            
        </nav>
    )
}

export default Header
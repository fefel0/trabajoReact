import React from 'react'
import './NavBar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        
        <nav>
            <img src={'./images/logo.png'} alt='logo' />
            <ul className='NavItems'>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>PC Armadas</a></li>
                <li><a href='#'>Notebooks</a></li>
            </ul>
            <div className='BtnCart'>
            <CartWidget />
            </div>
        </nav>
        
    )
}

export default NavBar
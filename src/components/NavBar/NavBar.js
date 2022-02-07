import React from 'react'
import './NavBar.css'


const NavBar = () => {
    return (
        
        <nav>
            <div className='NavLogo'>
                <img src={'./images/logo.png'} alt='logo' />
                <ul className='NavItems'>
                    <li><a href='#'>Productos</a></li>
                    <li><a href='#'>PC Armadas</a></li>
                    <li><a href='#'>Notebooks</a></li>
                </ul>
            </div>
            
        </nav>
        
    )
}

export default NavBar
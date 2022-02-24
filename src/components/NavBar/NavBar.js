import React from 'react'
import './NavBar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { getCategories } from '../api'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return (
        
        <nav className='NavBar'>
            <Link to={'/'}>
                <h2 className='titleEcommerce'>JARWAR</h2>
            </Link>
            <div className='NavItems'>
                {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) => isActive ? 'Selected' :'Select'
                }>{cat.description}</NavLink>)}
            </div>
            <div className='BtnCart'>
            <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar
import React from 'react'
import './NavBar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDataBase } from '../../services/firebase/firebase'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        getDocs(collection(firestoreDataBase, 'categories')).then(response => {
            const categories = response.docs.map(cat => {
                return { id: cat.id, ...cat.data()}
            })
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
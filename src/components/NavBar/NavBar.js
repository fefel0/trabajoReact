import React, { useContext } from 'react'
import './NavBar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDataBase } from '../../services/firebase/firebase'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const { products } = useContext(CartContext)

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
            <Link className='jarwar' to={'/'}>
                <h2 className='titleEcommerce'>JARWAR</h2>
            </Link>
            <div className='NavItems'>
                {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) => isActive ? 'Selected' :'Select'
                }>{cat.description}</NavLink>)}
            </div>
            <div className='BtnCart'>
            {products.length > 0 && <CartWidget />}
            </div>
        </nav>
    )
}

export default NavBar
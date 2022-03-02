import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart } = useContext(CartContext)
    
    return (
        <>
        <h1>Productos Agregados en el carrito:</h1>
        <div className='cntProd'>
            {cart.map((prod) => 
            <li key={prod.id}>{prod.cantidad}</li>
            )}
        </div>
        <div className='btnCart'>
            <Link to={'/detail/:productId'}>Seguir Comprando</Link>
            <Link to={'/'}>Finalizar Compra</Link>
        </div>
        </>
    )
    
}

export default Cart
import React from 'react';
import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa'


const CartWidget = () => {
    return (
        <div>
        <button className='BtnCart'>
            <FaShoppingCart className='cartBtn'/>
            <p className='countItem'>0</p>
        </button>
        </div>
    )
}

export default CartWidget;
import React from 'react';
import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa'


const CartWidget = () => {
    return (
        <div>
        <button className='BtnCart'>
            <FaShoppingCart />
            <p>0</p>
        </button>
        </div>
    )
}

export default CartWidget;
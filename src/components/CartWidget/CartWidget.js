import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartContex from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

    const { quantityTotal} = useContext(CartContex)

    return (
        <div>
        <Link to={'/cart'} className='BtnCart'>
            <FaShoppingCart className='cartBtn'/>
            <p className='quantity'>{quantityTotal()}</p>
        </Link>
        </div>
    )
}

export default CartWidget;
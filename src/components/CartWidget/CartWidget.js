
import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartWidget = () => {


    return (
        <div>
        <Link to={'/cart'} className='BtnCart'>
            <FaShoppingCart className='cartBtn'/>
        </Link>
        </div>
    )
}

export default CartWidget;
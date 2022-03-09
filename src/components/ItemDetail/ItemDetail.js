import React, { useContext } from 'react'
import './ItemDetail.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { useNotificationService } from '../../services/Notifications/NotificationService'


const ItemDetail = ({ product }) => {

    const [quantity, setQuantity] = useState(0)

    const { addToCart } = useContext(CartContext)

    const setNotification = useNotificationService()

    const onAdd = (quantity) => {
        setQuantity(quantity)
        addToCart(product, quantity)
        setNotification('success', `Se agregó ${product.modelo} al carrito`)
    }

    return (
        <>
        <Link to={'/'}>Back</Link>
        <div className='ItemsDetails'>
            <h2>Marca: {product.marca}</h2>
            <h3>Modelo: {product.modelo}</h3>
            <div>
                <img src={product.img} width='60%' alt={product.category} />
            </div>
            <div>
                <h3>Categoria: {product.category}</h3>
                <h3>Descripcion: {product.descripcion}</h3>
                <h4>precio:{product.precio}</h4>
            </div>
            {
                quantity > 0 ?
                <Link to={'/cart'}>Go To Cart</Link> :
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
            }
            
        </div>
        </>
    )
}

export default ItemDetail;





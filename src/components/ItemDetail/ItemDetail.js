import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Button from '../Button/Button'

const ItemDetail = ({ product }) => {
    const onAdd = (count) => {
        alert(`se agregaron ${count} ${product.modelo} al carrito`)
    }
    return (
        <>
        <Button name='Back' />
        <div className='ItemsDetails'>
            <h2>Marca: {product.marca}</h2>
            <h3>Modelo: {product.modelo}</h3>
            <div>
                <img src={product.img} width='30%' alt={product.cat} />
            </div>
            <div>
                <h3>Categoria: {product.category}</h3>
                <h3>Descripcion: {product.descripcion}</h3>
                <h4>precio:{product.precio}</h4>
            </div>
            <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
        </div>
        </>
    )
}

export default ItemDetail;





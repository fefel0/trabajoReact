import React from 'react'
import './Item.css'
import Button from '../Button/Button'

export default function Item ({ product }) {
    return(
        <div className='cardProduct'>
                <h1>{product.modelo} {product.generacion}</h1>
                <img src={product.img} width='20%' alt={product.modelo}/>
                <p>frecuencia:{product.frecuencia}</p>
                <p>nucleos:{product.nucleos}</p>
                <p>stock:{product.stock}</p>
                <Button name={product.precio} />
        </div>
    )
}

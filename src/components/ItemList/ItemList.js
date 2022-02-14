import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

export default function ItemList ({ products }) {
    return (
        <>
        {products.map((product) => (
            <Item key={product.id} product={product} />
        ))}
        </>
    )
}
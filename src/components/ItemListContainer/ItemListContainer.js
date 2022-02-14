import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts } from '../api';
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts().then((products) =>{
            setProducts(products)
        })
    }, [])

    const handleOnAdd = (quantity) => {
        alert(`se añadieron ${quantity} productos`)
    }

    return (
        <div className='itemListContainer'>
            <div>
            <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/>
            </div>
            <div className='cardStyle'>
            <ItemList products={products} />
            </div>
        </div>
    )
}


export default ItemListContainer
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts } from '../api';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        getProducts().then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts()
        })          
    }, [])
    
    return (
        <div className="ItemListContainer">
            {
                loading ? 
                    <h1>Cargando productos...</h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No se encontraron productos!</h1>
            }
        </div>
    )    
    
}

export default ItemListContainer
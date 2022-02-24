import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts } from '../api';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    
    useEffect(() => {
        getProducts(categoryId).then(item => {
            setProducts(item)
        }).catch(error  => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts()
        })          
    }, [categoryId])
    
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
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { firestoreDataBase } from '../../services/firebase/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDataBase, 'products', productId)
        getDoc(docRef).then(response => {
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        }).finally(() =>{
            setLoading(false)
        })
        return (() => {
            setProduct()
        })
    }, [productId])

    return (
        <div className="ItemDetailContainer" >
            { 
                loading ? 
                    <h1>Cargando...</h1> :
                product ? 
                    <ItemDetail  product={product}/> :
                    <h1>El producto no existe</h1> 
            }
        </div>
    )    
}

export default ItemDetailContainer
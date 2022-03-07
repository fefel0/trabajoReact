import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDataBase } from '../../services/firebase/firebase';


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    
    useEffect(() => {
        setLoading(true)

        //ternario para filtrar por category, sino no filtro
        const collectionRef = categoryId ?
            query(collection(firestoreDataBase, 'products'), where('category', '==', categoryId)) :
            collection(firestoreDataBase, 'products')

        getDocs(collectionRef).then(querySnapshot => {
            const products = querySnapshot.docs.map(doc =>{
                return { id: doc.id, ...doc.data()}
            })
            console.log(products)
            setProducts(products)
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
                products ? 
                    <ItemList products={products}/> : 
                    <h1>Aguarde un momento...</h1>
            }
        </div>
    )    
    
}

export default ItemListContainer
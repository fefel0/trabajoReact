import { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDataBase } from '../../services/firebase/firebase'
import { useNotificationService } from '../../services/Notifications/NotificationService'

const Cart = () => {
    const [processing, setProcessing] = useState(false)
    
    const { products, removeItem, productTotal, clearCart } = useContext (CartContext)

    const setNotification = useNotificationService()

    const confirmOrder = () => {
        setProcessing(true)

        const orderCart = {
            buyer:{
                name: 'Fede',
                phone: '541234555',
                address: 'por ahi 1233234',
            },
            items: products,
            total: productTotal(),
            date: Timestamp.fromDate(new Date()),
        }

        const batch = writeBatch(firestoreDataBase)
        const outOfStock = []
        
        orderCart.items.forEach(prod => {
            getDoc(doc(firestoreDataBase, 'products', prod.id)).then(response => {
                if(response.data().stock >= prod.quantity){
                    batch.update(doc(firestoreDataBase, 'products', response.id), {
                        stock: response.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({id: response.id, ...response.data()})
                }
            })
        })
        
        if(outOfStock.length === 0) {
            addDoc(collection(firestoreDataBase, 'orders'), orderCart).then(({id}) =>{
                batch.commit().then(() => {
                    clearCart()
                    setNotification('success', `orden correcta, su numero de compra es: ${id}`)
                })
            }).catch(error => {
                setNotification('error', error)
            }).finally(() =>{
                setProcessing(false)
            })
        } else {
            outOfStock.forEach(prod => {
                setNotification('error' `El producto ${prod.modelo} está fuera de stock`)
                removeItem(prod.id)
            })
        }
    }

    if(processing) {
        return <h2>Su orden esta siendo procesada...</h2>
    }

    if(products.length === 0) {
        return <h2>No hay productos en el carrito</h2>
    }

    const handleRemoveItems = (id) => {
        removeItem(id)
    }

    return (
        <>
        <h1>Productos Agregados en el carrito:</h1>
        {
                products.map(prod => {
                    return (
                        <div key={prod.id}
                        style={{
                            border: '2px solid black',
                            display: 'flex',
                            justifyContent: 'space-around',
                            borderRadius: '15px',
                            margin:'3px',
                        }}
                        >
                            <h3>{prod.marca}</h3>
                            <h3>{prod.modelo}</h3>
                            <h3>Cantidad: {prod.quantity}</h3>
                            <button onClick={() => handleRemoveItems(prod.id)}>x</button>
                        </div>
                    )
            })}
            <h3 style={{
                display: 'flex',
                justifyContent: 'end',
                marginRight: '20px',
            }}>Total: ${productTotal()}</h3>
        <div className='btnCart'>
            <Link to={'/category/:categoryId'}>Seguir Comprando</Link>
            <button onClick={() => confirmOrder()}>Confirmar Compra</button>
        </div>
        </>
    )
    
}

export default Cart
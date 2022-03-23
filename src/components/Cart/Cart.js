import { useContext, useState, useRef } from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import { writeBatch, addDoc, collection, Timestamp, getDocs, query, documentId, where } from 'firebase/firestore'
import { firestoreDataBase } from '../../services/firebase/firebase'
import { useNotificationService } from '../../services/Notifications/NotificationService'
import Togglable from '../Togglable/Togglable'
import Form from '../Form/Form'

const Cart = () => {
    const [processing, setProcessing] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })
    
    const { products, removeItem, productTotal, clearCart } = useContext (CartContext)

    const setNotification = useNotificationService()

    const formRef = useRef()

    const confirmOrder = () => {
        if(contact.name !== '' && contact.phone !== '' && contact.address !== '' && contact.comment !== ''){
            setProcessing(true)

            const orderCart = {
                buyer: contact,
                items: products,
                total: productTotal(),
                date: Timestamp.fromDate(new Date()),
            }
    
            const batch = writeBatch(firestoreDataBase)
            const outOfStock = []
            const idOrd = orderCart.items.map(i => i.id)

            getDocs(query(collection(firestoreDataBase, 'products'), where(documentId(), 'in', idOrd)))
                .then(response => {
                    response.docs.forEach((docSnapshot) =>{
                        if(docSnapshot.data().stock >= orderCart.items.find(prod => prod.id === docSnapshot.id).quantity) {
                            batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - orderCart.items.find(prod => prod.id === docSnapshot.id).quantity})
                        } else {
                            outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        addDoc(collection(firestoreDataBase, 'orders'), orderCart).then(({id}) => {
                            batch.commit()
                            clearCart()
                            setNotification('success', `Compra exitosa, su nro de orden es: ${id}`)
                        })
                    } else {
                        outOfStock.forEach(prod =>{
                            setNotification('error', `${prod.marca} ${prod.modelo} no tiene stock`)
                            removeItem(prod.id)
                        })
                    }
                }).catch((error) =>{
                    setNotification('error', error)
                }).finally(() =>{
                    setProcessing(false)
                })
                
    } else {
        setNotification('error' `Complete la orden con sus datos por favor!`)
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
        <div>
            <div>
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
                </div>
            <div className='btnCart'>
                <Link to={'/'} className='btnSeguir'>Seguir Comprando</Link>
                <button onClick={() => confirmOrder()}>Confirmar Compra</button>
                {
                    (contact.phone !== '' && contact.name !== '' && contact.address !== '' && contact.comment !== '') &&
                    <div>
                        <h3>Nombre: {contact.name}</h3>
                        <h3>Telefono: {contact.phone}</h3>
                        <h3>Direccion: {contact.address}</h3>
                        <h3>Comentario: {contact.comment}</h3>
                        <button onClick={() => setContact({ name:'', phone:'', address:'', comment:''})}>Reset</button>
                    </div>
                }
                <Togglable buttonLabelShow = {
                    (contact.phone !== '' && contact.name !== '' && contact.address !== '' && contact.comment !== '')
                    ? 'Editar Contacto'
                    : 'Agregar Contacto'
                }
                ref={formRef}>
                    <Form toggleVisibility={formRef} setContact={setContact}/>
                </Togglable>
            </div>
        </div>
    )
    
}

export default Cart
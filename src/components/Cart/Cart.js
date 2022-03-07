import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { products, removeItem, productTotal } = useContext (CartContext)

    if(products.legth === 0) {
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
                            border: '1px solid black',
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                        >
                            <h3>{prod.marca}</h3>
                            <h3>{prod.modelo}</h3>
                            <h3>Cantidad: {prod.quantity}</h3>
                            <h3>Total: ${productTotal()}</h3>
                            <button onClick={() => handleRemoveItems(prod.id)}>x</button>
                        </div>
                    )
            })}
        <div className='btnCart'>
            <Link to={'/detail/:productId'}>Seguir Comprando</Link>
            <Link to={'/'}>Finalizar Compra</Link>
        </div>
        </>
    )
    
}

export default Cart
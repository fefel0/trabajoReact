import { createContext, useEffect, useState} from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log(cart)
    }, [cart])

    //agrego items al carrito
    const addToCart = (item, quantity) => {
        isInCart(item.id)
        ? sumarQuantity(item, quantity)
        : setCart ([...cart, {...item, quantity}])
    }

    //consulto si existe el producto en el cart
    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id)
    }

    //sumar cantidad si existe
    const sumarQuantity = (item, quantity) => {
        const newProducts = cart.map((prod) =>{
            if(prod.id === item.id){
                const newProduct = {
                    ...prod,
                    quantity: prod.quantity + quantity
                }
                return newProduct
            } else {
                return prod
            }
        })
        setCart(newProducts)
    }

    //limpiar cart
    const clear = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clear }}>
            {children}
        </CartContext.Provider>
    )
}
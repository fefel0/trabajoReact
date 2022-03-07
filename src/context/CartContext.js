import { createContext, useState} from 'react'

const Context = createContext ()

export const CartContextProvider = ({ children }) => {
    
    const [products, setProducts] = useState([])
    
    const addToCart = (item, quantity) => {
        const productToAdd = {
            ...item,
            quantity
        }

        isInCart(item.id) ? updateItemInCart(productToAdd) : addItemToCart(productToAdd)
    }

    const isInCart = (id) => {
        return products.some(prod => prod.id === id)
    }

    const updateItemInCart = (productToAdd) => {
        const updateCart = products.map(prod => {
            if(prod.id === productToAdd.id) {
                const updateProduct = {
                    ...prod,
                    quantity: prod.quantity + productToAdd.quantity
                }
                return updateProduct
            }else {
                return prod
            }
        })
        setProducts(updateCart)
    }

    const addItemToCart = (productToAdd) => {
        setProducts([...products, productToAdd])
    }

    const removeItem = (id) => {
        const newProducts = products.filter (prod => prod.id !== id)
        setProducts(newProducts)
    }

    const clearCart = () => {
        setProducts([])
    }

    const productTotal = () => {
        let total = 0
        products.forEach(prod => {
            total = total + prod.precio * prod.quantity
        })
        return total
    }

    const quantityTotal = () => {
        let totalQ = 0
        products.forEach(prod => {
            totalQ = totalQ + prod.quantity
        })
        return totalQ
    }

    return (
        <Context.Provider value={{
            products,
            addToCart,
            removeItem,
            clearCart,
            productTotal,
            quantityTotal
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
import {useState, createContext} from 'react'

const CartContext = createContext ()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState ([])


    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        count: productToAdd.count
                    }
                    return newProduct
                } else {
                   return prod 
                }
            })
            setCart(newCart)
        }
    }
    
    const getCount = () => {
        let acumulado = 0
        cart.forEach(prod => {
          acumulado += prod.count
        })
        
        return acumulado
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const borrarCarrito = ()=>{
        const newCart =[]
        setCart (newCart)

    }


    const borrarItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const costoTotal = () => {
        const costoTotal = cart.reduce((acumulado, {count, precio}) => acumulado + (count * precio) ,0)
        return costoTotal
    }

console.log(cart);

    return(
    <CartContext.Provider value={{ cart, addItem, getCount, borrarItem, borrarCarrito,costoTotal }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContext
import { createContext, useState } from "react"

export const CartContext = createContext([]) //creo el context

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    //agrega items al carrito
    const addToCart = (cantidad, item) => {
        if (isOnCart(item.id)) {
            setCart(cart.filter(item => item.cantidad += cantidad)) //si ya está, lo sumo
        } else {
            setCart([...cart, {...item, cantidad}]); //si no está, lo agrego
        }        
    }


    console.log(cart)

    const isOnCart = (id) =>{
        const alerta = cart.some((producto) => producto.id === id)
        return alerta;
    }


    const limpiarCarrito = () => {  //funcion para limpiar todo el carrito
        setCart([])
    }

    const eliminarItem = (id) => {  //funcion para eliminar solo un item del carrito
        setCart(cart.filter(item => item.id != id))
    }


    return(
        <CartContext.Provider value={{cart, setCart, addToCart, limpiarCarrito, eliminarItem}}>
            {children}
        </CartContext.Provider>
    )

}


export default CartContextProvider;
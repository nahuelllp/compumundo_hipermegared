import { createContext, useState } from "react"

export const CartContext = createContext([]) 

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (cantidad, item) => {
        let producto = isOnCart(item.id)
        if (producto) {

            const cartAux = [...cart]
            cartAux.forEach((i) =>{
                if(i.id === item.id){
                    i.cantidad = i.cantidad + cantidad;
                }
            })
            setCart(cartAux)
        } else {
            setCart([...cart, {...item, cantidad}]);
        }        
    }


    const isOnCart = (id) =>{
        const alerta = cart.some((item) => item.id === id)
        return alerta;
    }


    const limpiarCarrito = () => {
        setCart([])
    }

    const eliminarItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const getCantidadTotal = () => {
        let cantitdadTotal = 0;
        for(let i = 0; i < cart.length; i++){
            cantitdadTotal += cart[i].cantidad
        };
        return cantitdadTotal;
    }
    
    const getPrecioTotal = () =>{
        let precioTotal = 0;
        for(let i = 0; i < cart.length; i++){
            precioTotal += (cart[i].precio * cart[i].cantidad)
        }
        return precioTotal;
    }


    return(
        <CartContext.Provider value={{cart, setCart, addToCart, limpiarCarrito, eliminarItem, getCantidadTotal, getPrecioTotal}}>
            {children}
        </CartContext.Provider>
    )

}


export default CartContextProvider;
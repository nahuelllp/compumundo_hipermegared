import React, { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from 'react-router-dom'
import './Cart.css'
import trash from '../../Assets/img/trash.png'

export default function Cart() {
  const { cart, limpiarCarrito, eliminarItem, getCantidadTotal, getPrecioTotal } = useContext(CartContext)

      return(

        <main>
         
          {

            cart.length == 0  
            ? <>
                <p className="text-center cart-titulo">Aún no hay productos en el carrito ☹️</p>
                <Link to="/"><h5 className="text-center cart-subtitulo">Empezar a comprar.</h5></Link>
              </>
            : <div className="cartlist col-5">

                
              <ul>
                {
                  cart.map(item => (  
                    <li key={item.id} className="producto_cart">
                      <h3>Producto: {item.titulo}</h3>
                      <h3>Cantidad: {item.cantidad}</h3>
                      <h3>Precio: ${item.precio}</h3>
                      <button className="btn btn-danger btn-sm botonTrash" onClick={()=> eliminarItem(item.id)}><img src={trash} alt="logo" /></button>
                    </li>                                     
                  ))
                }
                <>
                <h3>Total de productos a comprar: {getCantidadTotal()}</h3>
                <h3>Total a pagar: {getPrecioTotal()}</h3>
                </>
                
              </ul>

                <button onClick={limpiarCarrito}>VACIAR</button>
              
            </div>
          }
        </main>
      )
}


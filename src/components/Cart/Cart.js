import React, { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from 'react-router-dom'
import './Cart.css'
import trash from '../../Assets/img/trash.png'
import CartCheckout from "../Checkout/CheckoutForm"

export default function Cart() {
  const { cart, limpiarCarrito, eliminarItem, getCantidadTotal, getPrecioTotal } = useContext(CartContext)

      return(

        <main>
          {

            cart.length === 0  
            ? <>
                <p className="text-center emptyCartTitle">Aún no hay productos en el carrito ☹️</p>
                <Link to="/"><h5 className="text-center linkToShop">Empezar a comprar.</h5></Link>
              </>
            :
          <main>
            <p className="cartTitle">Tu compra:</p>
            <div className="row cartRow">
              <div className="col-7">                
                <>
                  {
                    cart.map(item => (  
                      <li key={item.id} className="productCard">
                        <h4 className="productCardDetail"><span className="productSubtitle">Producto:</span> {item.titulo}</h4>
                        <h4 className="productCardDetail"><span className="productSubtitle">Cantidad:</span> {item.cantidad}</h4>
                        <h4 className="productCardDetail"><span className="productSubtitle">Precio por unidad:</span> ${item.precio}</h4>
                        <button className="btn btn-danger btn-sm trashButton" onClick={()=> eliminarItem(item.id)}><img src={trash} alt="logo" /></button>
                      </li>                                     
                    ))
                  }
                </>
              </div>
            </div>
              <>
                <h3 className="productFinalAmount">Total de productos a comprar: {getCantidadTotal()}</h3>
                <h3 className="totalPriceTitle">Total a pagar: ${getPrecioTotal()}</h3>            
                <button className="emptyCartButton btn btn-danger" onClick={limpiarCarrito}>VACIAR CARRITO</button>
                </>
              <div>
                <CartCheckout/>
              </div>
          
          </main>       
          }
        </main>
      )
}


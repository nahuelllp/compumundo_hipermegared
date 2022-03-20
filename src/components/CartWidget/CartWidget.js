import React, { useContext } from "react";
import carrito from '../../Assets/img/cart.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';

export default function CartWidget() {

    const {cart, getCantidadTotal} = useContext(CartContext);

    return(

        <div>
                {
                cart.length > 0 &&

                    <Link to='/cart'>
                        <img src={carrito} alt="logo" />
                        <span>{getCantidadTotal()}</span>
                    </Link>
                }
            </div>
    );
}
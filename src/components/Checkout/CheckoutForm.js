import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { dataBase } from "../../firebase";
import { CartContext } from "../Cart/CartContext";
import './CheckoutForm.css';


const CartCheckout = () => {
    const [email, setEmail] = useState('')
    const [nombre, setNombre] = useState('')
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, getPrecioTotal } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const newOrder = {
            date: new Date(),
            buyer: {email, nombre},
            items: cart,
            total: getPrecioTotal(),
        };
        addDoc(collection(dataBase, 'tickets'), newOrder)
        .then((res) => {
            setOrderId(res.id);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    if (orderId !== '') {
        return <h2 className="orderTitle">Este es el Id de tu orden de compra: <span className="orderId">{orderId}</span></h2>
    }
    return (
        <>
            <div className="col-10">
                <h4 className="formTitle">Introduce tus datos para finalizar la compra:</h4>
                <form
                    onSubmit={handleSubmit}
                    action=""
                >
                    <input className="inputMargin"
                        onChange={(e) => setNombre(e.target.value)}    
                        value={nombre}
                        type="text"
                        placeholder="Nombre"
                    /><br></br>
                    <input className="inputMargin"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email"
                    /><br></br>
                    <button className="btn btn-primary checkoutButton"
                        disabled={(nombre === '') | (email === '')}
                    >
                        {loading
                            ? 'Generando orden...'
                            : 'Finalizar Compra'
                        }
                    </button>
                </form>
            </div>
        </>
    )
}

export default CartCheckout;
import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { dataBase } from "../../firebase";
import { CartContext } from "../Cart/CartContext";


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
        return <h2>Este es el Id de tu orden de compra: {orderId}</h2>
    }
    return (
        <>
            <div>
                <h2>Finaliza tu compra acá bb</h2>
                <form
                    onSubmit={handleSubmit}
                    action=""
                >
                    <input 
                        onChange={(e) => setNombre(e.target.value)}    
                        value={nombre}
                        type="text"
                        placeholder="Nombre"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email"
                    />
                    <button
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
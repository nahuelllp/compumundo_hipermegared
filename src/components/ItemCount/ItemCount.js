import { useState} from "react";
import './ItemCount.css';


export default function ItemCount({ stock, initial, onAdd }) {

    const [itemCounter, setItemCounter] = useState(initial);

    function agregarItem() {
        if (itemCounter < stock) {
            setItemCounter(itemCounter + 1)
        }
    }

    function eliminarItem() {
        if (itemCounter > 1 ) {
            setItemCounter(itemCounter -1)
        }
    }

    function agregarCarrito() {
        onAdd(itemCounter)       
    }


    return (
        <div className="contenedorItems">
            <div className="contadorItems">
                <button className="btn btn-danger" onClick={eliminarItem}> - </button>
                <h5> {itemCounter} </h5>
                <button disabled={itemCounter === 0} className="btn btn-success" onClick={agregarItem}> + </button>
            </div>
            <p className="text-center">Stock: 8</p>
            <button className="btn btn-primary botonAgregarCarrito" onClick={agregarCarrito}> <h5>Agregar al carrito</h5> </button>
        </div>
    )
}
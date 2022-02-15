import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { Link } from 'react-router-dom'

export default function ItemDetail( { item }) {

    const [itemAmount, setItemAmount] = useState();

    function onAddItem(newItemCount) {
        console.log(newItemCount)
        setItemAmount(newItemCount);

    }



    return (

        <div className="card mb-3 cardProducto cardDetail">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start imgProductoDetail imgeffect" alt="Imagen de producto" />
                </div>
                <div className="col-md-8">
                    <div className="card-body card-bg">
                        <h3 className="card-title">{item.titulo}</h3>
                        <h5 className="card-text">Procesador: {item.procesador} </h5>
                        <h5 className="card-text">Placa de video: {item.placaVideo} </h5>
                        <h5 className="card-text">Mother: {item.motherboard} </h5>
                        <h5 className="card-text">Disco: {item.disco} </h5>
                        <h5 className="card-text">RAM: {item.memoriaRAM} </h5>
                        <h5 className="card-text">Gabinete: {item.gabinete} </h5>
                        <h5 className="card-text">Fuente: {item.fuente} </h5>
                        <h5 className="card-text">Precio: ${item.precio} </h5>

                        {
                            !itemAmount ?
                            <ItemCount stock={8} initial={1} onAdd={onAddItem} /> :
                            <Link to="/cart"><button className='btn btn-success'>Ir al carrito</button></Link>
                        }

                    </div>
                </div>
            </div>
        </div>
      )

}
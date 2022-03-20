import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';

export default function ItemDetail( { item } ) {

    const [showButton, setShowButton] = useState(false);
    const {addToCart} = useContext(CartContext);

    function onAddItem(cantidad) {
        setShowButton(true);
        addToCart(cantidad, item)
    }




    return (
        <div className="card mb-3 cardProducto cardDetail">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start imgProductoDetail imgeffect" alt="Imagen de producto" />
                </div>
                <div className="col-md-8 card-bg">
                    <div className="card-body">
                        <h3 className="card-title">{item.titulo}</h3>
                        <h5 className="card-text">{item.infoProcesador}</h5>
                        <h5 className="card-text">{item.infoPlaca}</h5>
                        <h5 className="card-text">{item.infoMother}</h5>
                        <h5 className="card-text">{item.infoRAM}</h5>
                        <h5 className="card-text">{item.infoSocket}</h5>
                        <h5 className="card-text">{item.infoNucleo}</h5>
                        <h5 className="card-text">{item.infoChipsetPlaca}</h5>
                        <h5 className="card-text">{item.infoTipoMemoriaPlaca}</h5>
                        <h5 className="card-text">{item.infoChipsetMother}</h5>
                        <h5 className="card-text">{item.infoSocketMother}</h5>
                        <h5 className="card-text">{item.infoCapacidadRAM}</h5>
                        <h5 className="card-text">{item.infoVelocidadRAM}</h5>
                        <h5 className="card-text">{item.infoTipoRAM}</h5>
                        <h5 className="card-text">Precio: ${item.precio} </h5>

                        {
                            !showButton ?
                            <ItemCount stock={8} initial={1} onAdd={onAddItem} /> :
                            <Link to="/cart"><button className='btn btn-success'>Finalizar compra</button></Link>
                        }

                    </div>
                </div>
            </div>
        </div>
      )

}
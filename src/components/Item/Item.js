import './Item.css';
import { Link } from 'react-router-dom';


export default function Item( {item} ) {
    return (
        
    <div className="card mb-3 cardProducto">
        <Link to={`/productos/${item.id}`}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.img} className="img-fluid rounded-start imgProd" alt="Imagen de producto" />
            </div>
            <div className="col-md-8 card-bg">
                <div className="card-body">
                    <h3 className="card-title">{item.titulo}</h3>
                    <h5 className="card-text descripcion">{item.descripcion} </h5>
                    <h5 className="card-text">Precio: ${item.precio} </h5>
                    <button className='btn btn-info'>Comprar</button>
                    <button className='btn btn-success boton-info'>Mas info</button>
                </div>
            </div>
        </div>
        </Link>
    </div>
    )
}



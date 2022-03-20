import './ItemList.css';
import Item from '../Item/Item.js';

export default function ItemList( {productos}) {

    return (
        <div>
            {
                productos.map(function(producto) {
                    return (
                        <Item key={producto.id} item={producto} />
                    )
                })
            }
        </div>
    );
}
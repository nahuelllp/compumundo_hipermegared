import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react";
import { getProductos } from "../../api/api";
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {

    const [item, setItem] = useState()
    const { itemId} = useParams();

    useEffect(() => {
        getProductos().then((items) =>{
            const item = items.find((i) => i.id.toString() === itemId)
        setItem(item)
        })        
    }, [itemId]);


    return (

      <div>
          { !item ? <p className='tituloCargando text-center animated flash'> Cargando producto... </p> :  <ItemDetail item={item} />}
      </div>

      );

}
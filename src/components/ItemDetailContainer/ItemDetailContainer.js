import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react";
import { getProductos } from "../../api/api";


export default function ItemDetailContainer() {

    const [item, setItem] = useState()

    useEffect(() => {        

        getProductos().then((items) =>{
            const item = items.find((item) => item.id === 2)
            setItem(item)

        })
        
    }, []);


    return (

      <div>
          { !item ? <p className='tituloCargando text-center animated flash'> Cargando producto... </p> :  <ItemDetail item={item} />}
      </div>

      );

}
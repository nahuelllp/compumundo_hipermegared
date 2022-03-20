import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { doc, getDoc} from 'firebase/firestore';
import { dataBase } from '../../firebase';


export default function ItemDetailContainer() {

    const [item, setItem] = useState()
    const { itemId} = useParams();

    useEffect(() => {
        const itemRef = doc(dataBase, "items", itemId);
        getDoc(itemRef).then((snapshot) => {
            if(snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data()})
            }
        }).catch(error => {
            console.log(error)
        })  
    }, [itemId]);


    return (

      <div>
          { !item ? <p className='tituloCargando text-center animated flash'> Cargando producto... </p> :  <ItemDetail item={item} />}
      </div>

      );

}
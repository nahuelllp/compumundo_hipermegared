import React, { useEffect, useState } from "react";
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import { getProductos } from '../../api/api';
import ItemList from '../ItemList/ItemList'


export default function ItemListContainer({ greeting }) {

  const [productos, setProductos] = useState([])

  useEffect(() => {

    getProductos().then(function(productos){

      setProductos(productos)

    })

  }, [])

  function onAddItem(itemCount) {
    console.log(itemCount);
  }

  return (
    <div>
      <p className="ItemListTitulo text-center"> {greeting} </p>
      { productos.length > 0 ? <ItemList productos={productos} /> : <p className="tituloCargando text-center animated flash"> Cargando productos...</p>}
      <ItemCount stock={8} initial={0} onAdd={onAddItem} />
    </div>
  )
}
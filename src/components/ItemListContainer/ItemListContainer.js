import React, { useEffect, useState } from "react";
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import { getProductos } from '../../api/api';
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";


export default function ItemListContainer({ greeting }) {

  const [productos, setProductos] = useState([])
  const { nombreCategoria } = useParams();


  useEffect(() => {

    getProductos().then(function(productos){
      if (!nombreCategoria) {
        setProductos(productos);
      } else {
      const itemsPorCategoria = productos.filter((producto) => {
        return producto.categoria === nombreCategoria
      })
      setProductos(itemsPorCategoria)
    }
    })

  }, [nombreCategoria])

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
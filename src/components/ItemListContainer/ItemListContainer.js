import React, { useEffect, useState } from "react";
import './ItemListContainer.css'
import { getProductos } from '../../api/api';
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { getDocs, collection } from 'firebase/firestore'
import { dataBase } from "../../firebase";


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

  //nuevo useEffect

  useEffect(() => {

    //llamo a la collection, con ref de la base de datos y el nombre de mi collection
    getDocs(collection(dataBase, "items")).then(snapshot => {
      const products = snapshot.docs.map( (doc) => ({
        id: doc.id, ...doc.data()
      }))
      console.log(products)
    }).catch(error => {
      console.log(error)
    })

  }, []);


  return (
    <div>
      <p className="ItemListTitulo text-center"> {greeting} </p>
      { productos.length > 0 ? <ItemList productos={productos} /> : <p className="tituloCargando text-center animated flash"> Cargando productos...</p>}
    </div>
  )
}
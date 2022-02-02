import React from "react";
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount";



export default function ItemListContainer({ greeting }) {
  function onAddItem(itemCount) {
    console.log(itemCount);
  }

  return (
    <div>
      <p className="ItemListTitulo animated flash text-center"> {greeting} </p>
      
      <ItemCount stock={8} initial={0} onAdd={onAddItem} />
    </div>
  )
}
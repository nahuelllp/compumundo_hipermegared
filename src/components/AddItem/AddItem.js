import React, { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { dataBase } from "../../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';


const AddItemContainer = () => {

const [titulo, setTitulo] = useState("")
const [descripcion, setDescripcion] = useState("")
const [categoria, setCategoria] = useState("")
const [precio, setPrecio] = useState(0)
const [image, setImage] = useState()



//tomo los cambios en inputs
const cambioTitulo = event => setTitulo(event.target.value)
const cambioDescripcion = event => setDescripcion(event.target.value)
const cambioCategoria = event => setCategoria(event.target.value)
const cambioPrecio = event => setPrecio(event.target.value)
const cambioImage = event => setImage(event.target.files[0])

const submitForm = async (event) => {
    event.preventDefault();
    console.log(titulo)
    //ver que no se introduzcan campos vacíos
    if (![titulo, categoria, descripcion].some(field => field === "")) {


        const itemCollection = collection(dataBase, "items")
        let imgURL = ""

        if(typeof image !== "undefined") {
            //ref al storage
            const storage = getStorage()
            const imageName = (+ new Date()).toString(36)
            const storageRef = ref(storage, `items/${imageName}`)

            const uploadTask = await uploadBytes(storageRef, image)
            imgURL = await getDownloadURL (uploadTask.ref)
        }


        const itemNuevo = {
            titulo: titulo,
            descripcion: descripcion,
            categoria: categoria,
            precio: precio,
            img: imgURL
        }

        addDoc(itemCollection, itemNuevo)
        .then(doc => {
            console.log("Se guardó el documento correctamente", doc.id)
        })
        .catch(error => {
            console.log(error)
        })

    } else {
        console.log("campo vacío")
    }
}


return (

    <div>
        <h1>Add product</h1>
        <form onSubmit={submitForm} className="aa">
            <div>
                <label>Nombre del prod</label>
                <input value={titulo} onChange={cambioTitulo} type="text"></input>
            </div>
            <div>
                <label>Descripcion del prod</label>
                <input value={descripcion} onChange={cambioDescripcion} type="text"></input>
            </div>
            <div>
                <label>categoria del prod</label>
                <input value={categoria} onChange={cambioCategoria} type="text"></input>
            </div>
            <div>
                <label>precio del prod</label>
                <input value={precio} onChange={cambioPrecio} type="number"></input>
            </div>
            <div>
                <label>img</label>
                <input name="file" onChange={cambioImage} type="file"></input>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>

)


}

export default AddItemContainer
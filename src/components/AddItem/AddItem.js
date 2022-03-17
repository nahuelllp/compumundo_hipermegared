import React, { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { dataBase } from "../../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';


const AddItemContainer = () => {

const [titulo, setTitulo] = useState("") /*general*/
const [descripcion, setDescripcion] = useState("") /*general*/
const [categoria, setCategoria] = useState("") /*general*/

const [infoProcesador, setInfoProcesador] = useState("") /*PC*/
const [infoPlaca, setInfoPlaca] = useState("") /*PC*/
const [infoMother, setInfoMother] = useState("") /*PC*/
const [infoRAM, setInfoRAM] = useState("") /*PC*/

const [infoSocket, setInfoSocket] = useState("") /*procesadores*/
const [infoNucleo, setInfoNucleo] = useState("") /*procesadores*/

const [infoChipsetPlaca, setInfoChipsetPlaca] = useState("") /*placasVideo*/
const [infoTipoMemoriaPlaca, setInfoTipoMemoriaPlaca] = useState("") /*placasVideo*/

const [infoChipsetMother, setInfoChipsetMother] = useState("") /*motherboards*/
const [infoSocketMother, setInfoSocketMother] = useState("") /*motherboards*/

const [infoCapacidadRAM, setInfoCapacidadRAM] = useState("") /*memorias RAM*/
const [infoVelocidadRAM, setInfoVelocidadRAM] = useState("") /*memorias RAM*/
const [infoTipoRAM, setInfoTipoRAM] = useState("") /*memorias RAM*/

const [precio, setPrecio] = useState(0) /*general*/
const [image, setImage] = useState() /*general*/



//tomo los cambios en inputs
const cambioTitulo = event => setTitulo(event.target.value) /*general*/
const cambioDescripcion = event => setDescripcion(event.target.value) /*general*/
const cambioCategoria = event => setCategoria(event.target.value) /*general*/

const cambioInfoProcesador = event => setInfoProcesador(event.target.value) /*pc*/
const cambioInfoPlaca = event => setInfoPlaca(event.target.value) /*pc*/
const cambioInfoMother = event => setInfoMother(event.target.value) /*pc*/
const cambioInfoRAM = event => setInfoRAM(event.target.value) /*pc*/

const cambioInfoSocket = event => setInfoSocket(event.target.value) /*procesadores*/
const cambioInfoNucleo = event => setInfoNucleo(event.target.value) /*procesadores*/

const cambioInfoChipsetPlaca = event => setInfoChipsetPlaca(event.target.value) /*placasVideo*/
const cambioInfoTipoMemoriaPlaca = event => setInfoTipoMemoriaPlaca(event.target.value) /*placasVideo*/

const cambioInfoChipsetMother = event => setInfoChipsetMother(event.target.value) /*motherboards*/
const cambioInfoSocketMother = event => setInfoSocketMother(event.target.value) /*motherboards*/

const cambioInfoCapacidadRAM = event => setInfoCapacidadRAM(event.target.value) /*memorias RAM*/
const cambioInfoVelocidadRAM = event => setInfoVelocidadRAM(event.target.value) /*memorias RAM*/
const cambioInfoTipoRAM = event => setInfoTipoRAM(event.target.value) /*memorias RAM*/

const cambioPrecio = event => setPrecio(event.target.value) /*general*/
const cambioImage = event => setImage(event.target.files[0]) /*general*/

const submitForm = async (event) => {
    event.preventDefault();
    console.log(titulo)

    {

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
            infoProcesador: infoProcesador,
            infoPlaca: infoPlaca,
            infoMother: infoMother,
            infoRAM: infoRAM,
            infoSocket: infoSocket,
            infoNucleo: infoNucleo,
            infoChipsetPlaca: infoChipsetPlaca,
            infoTipoMemoriaPlaca: infoTipoMemoriaPlaca,
            infoChipsetMother: infoChipsetMother,
            infoSocketMother: infoSocketMother,
            infoCapacidadRAM: infoCapacidadRAM,
            infoVelocidadRAM: infoVelocidadRAM,
            infoTipoRAM: infoTipoRAM,
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
                <label>info procesador</label>
                <input value={infoProcesador} onChange={cambioInfoProcesador} type="text"></input>
            </div>
            <div>
                <label>info placa</label>
                <input value={infoPlaca} onChange={cambioInfoPlaca} type="text"></input>
            </div>
            <div>
                <label>info mother</label>
                <input value={infoMother} onChange={cambioInfoMother} type="text"></input>
            </div>
            <div>
                <label>info RAM</label>
                <input value={infoRAM} onChange={cambioInfoRAM} type="text"></input>
            </div>


            <div>
                <label>info Socket procesador</label>
                <input value={infoSocket} onChange={cambioInfoSocket} type="text"></input>
            </div>
            <div>
                <label>info Nucleo procesador</label>
                <input value={infoNucleo} onChange={cambioInfoNucleo} type="text"></input>
            </div>

            <div>
                <label>info chipset placa video</label>
                <input value={infoChipsetPlaca} onChange={cambioInfoChipsetPlaca} type="text"></input>
            </div>
            <div>
                <label>info tipo memoria placas video</label>
                <input value={infoTipoMemoriaPlaca} onChange={cambioInfoTipoMemoriaPlaca} type="text"></input>
            </div>

            <div>
                <label>info chipset mother</label>
                <input value={infoChipsetMother} onChange={cambioInfoChipsetMother} type="text"></input>
            </div>
            <div>
                <label>info socket mother</label>
                <input value={infoSocketMother} onChange={cambioInfoSocketMother} type="text"></input>
            </div>

            <div>
                <label>info capacidad RAM</label>
                <input value={infoCapacidadRAM} onChange={cambioInfoCapacidadRAM} type="text"></input>
            </div>
            <div>
                <label>info velocidad RAM</label>
                <input value={infoVelocidadRAM} onChange={cambioInfoVelocidadRAM} type="text"></input>
            </div>
            <div>
                <label>info tipo RAM</label>
                <input value={infoTipoRAM} onChange={cambioInfoTipoRAM} type="text"></input>
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
import { getDocs, collection } from 'firebase/firestore'
import { dataBase } from '../firebase';
/*

const productos = [
    {
        id: 1,
        titulo: 'Pc de oficina Lenovo',
        descripcion: 'Pc Lenovo V50s, Intel Core I3 10100, Ram 8gb, Ssd 240gb',
        procesador: 'Intel Core i3 10100',
        placaVideo: 'No posee.',
        motherboard: 'ASUS H310M',
        disco: 'SSD 240 GB',
        memoriaRAM: '8 GB',
        gabinete: 'Lenovo V50s',
        fuente: 'No posee',
        precio: 69990,
        "img": imgproducto1,
        categoria: 'computadoras',
    },
    {
        id: 2,
        titulo: 'Pc Gamer Intel',
        descripcion: 'Pc Armada Completa Intel I7 8700 8va Gen, Hd 1tb, Ddr4 4gb',
        procesador: 'Intel Core i7 9na Generacion',
        placaVideo: 'Intel HD graphics 630',
        motherboard: 'MSI H310M',
        disco: 'HHD 1TB',
        memoriaRAM: '4GB 2400MHZ DDR4',
        gabinete: 'ATX Sentley G28',
        fuente: '500W',
        precio: 94999,
        "img": imgproducto2,
        categoria: 'computadoras',
    },
    {
        id: 3,
        titulo: 'Pc gamer AMD',
        descripcion: 'Pc Armada Amd Ryzen 5 2600, 1tb, 8gb Ddr4, Gtx 1650',
        procesador: 'AMD Ryzen 5 2600',
        placaVideo: 'Nvidia GeForce GTX 1050 Ti 4GB',
        motherboard: 'MSI A320',
        disco: 'HDD 1TB',
        memoriaRAM: '8GB 2666MHZ DDR4',
        gabinete: 'Sentley medium tower X10 RGB',
        fuente: 'Sentley SNP 550W',
        precio: 169999,
        "img": imgproducto3,
        categoria: 'computadoras',
    },
    {
        id: 4,
        titulo: 'AMD Ryzen 5 1600',
        descripcion: 'Posee 6 núcleos. 12 hilos. Frecuencia: 3200.00 mhz.',
        precio: 29999,
        "img": imgproducto4,
        categoria: 'procesadores',
    },
    {
        id: 5,
        titulo: 'Placa de Video Zotac GeForce GTX 1650 4GB GDDR6',
        descripcion: 'Tipo: pcie. Posee 2 Cooler Fan.',
        precio: 57000,
        "img": imgproducto5,
        categoria: 'placasVideo'
    },
    {
        id: 6,
        titulo: 'Mother Asrock B560M PRO4',
        descripcion: 'Socket: 1200 Rocket Lake-S,1200 Comet Lake. Chipset: Intel B560.',
        precio: 14129,
        "img": imgproducto6,
        categoria: 'motherboards',
    },
    {
        id: 7,
        titulo: 'Memoria OLOy DDR4 8GB',
        descripcion: 'Velocidad: 2666 mhz. Latencia: 19cl.',
        precio: 4450,
        "img": imgproducto7,
        categoria: 'memorias',
    }
]*/


const promesaProductos = new Promise(function(resolve, reject) {

    getDocs(collection(dataBase, "items")).then(snapshot => {
        const products = snapshot.docs.map( (doc) => ({
          id: doc.id, ...doc.data()
        }))
        resolve(products)
        console.log(products)
      }).catch(error => {
        console.log(error)
        reject(error)
      })

});


function getProductos() {

    return promesaProductos;

}

export {
    getProductos,
}
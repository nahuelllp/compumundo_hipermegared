import producto1 from '../Assets/img/producto1.png';
import producto2 from '../Assets/img/producto2.png';
import producto3 from '../Assets/img/producto3.png';

const productos = [
    {
        id: 1,
        titulo: 'Pc de oficina Lenovo',
        descripcion: 'Pc Lenovo V50s, Intel Core I3 10100, Ram 8gb, Ssd 240gb',
        precio: 69990,
        "img": producto1,
    },
    {
        id: 2,
        titulo: 'Pc Gamer Intel',
        descripcion: 'Pc Armada Completa Intel I7 8700 8va Gen, Hd 1tb, Ddr4 4gb',
        precio: 94999,
        "img": producto2,
    },
    {
        id: 3,
        titulo: 'Pc gamer AMD',
        descripcion: 'Pc Armada Amd Ryzen 5 2600, 1tb, 8gb Ddr4, Gtx 1650 4gb Gddr5',
        precio: 169999,
        "img": producto3,
    }
]


const promesaProductos = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve(productos)
    }, 2500)

});


function getProductos() {

    return promesaProductos;

}

export {
    getProductos,
}
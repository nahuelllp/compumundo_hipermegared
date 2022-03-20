import { getDocs, collection } from 'firebase/firestore';
import { dataBase } from '../firebase';

const promesaProductos = new Promise(function(resolve, reject) {

    getDocs(collection(dataBase, "items")).then(snapshot => {
        const products = snapshot.docs.map( (doc) => ({
          id: doc.id, ...doc.data()
        }))
        resolve(products)
      }).catch(error => {
        reject(error)
      })

});


function getProductos() {

    return promesaProductos;

}

export {
    getProductos,
}
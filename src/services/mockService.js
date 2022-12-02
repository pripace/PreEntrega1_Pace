/*simulando el BACK-END */
import products from "../data/data";

function getItems(idCategory) {
    return new Promise((resolve) => {

        if (idCategory === undefined){
        setTimeout(() => {
            resolve(products)
        }, 1000);
    }
    else {
        setTimeout(() => {
            let itemSolicitado = products.filter((item) => item.category === idCategory);
            resolve(itemSolicitado)
        }, 1000);
    }
    });
}

export function getOneItem(idParam) {
    return new Promise((resolve) => {
        let itemSolicitado = products.find((item) => item.id === Number(idParam));

        setTimeout(() => {
            resolve(itemSolicitado);
        }, 1000);
    });
}

export default getItems;

/*simulando el BACK-END */
import products from "../data/data";

function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    });
}

export function getOneItem(idParam) {
    return new Promise((resolve) => {
        let itemSolicitado = products.find((item) => item.id === Number(idParam))

        setTimeout(() => {
            resolve(itemSolicitado);
        }, 2000);
    });
}

export default getItems;

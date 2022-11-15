/*simulando el BACK-END */
import products from "../data/data";

function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    });
}

export function getOneItem() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[0])
        }, 2000);
    });
}

export default getItems;

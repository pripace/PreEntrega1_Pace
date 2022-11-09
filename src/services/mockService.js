/*simulando el BACK-END */
import products from "../data/data";

function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    });
}

export default getItems;
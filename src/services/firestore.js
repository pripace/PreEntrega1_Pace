
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDZznZZ9fVLhhxk29rz1r60yv4ES_5GB70",
  authDomain: "latienditadeyoga.firebaseapp.com",
  projectId: "latienditadeyoga",
  storageBucket: "latienditadeyoga.appspot.com",
  messagingSenderId: "270291959230",
  appId: "1:270291959230:web:b34dc3dd6562478caa0def"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

export default async function getItems(){
    //1 referencio mi coleccion
    const collectionProductsRef = collection(DB, "products");
    //2 solicito docs de colec
    const documentSnapshot = await getDocs(collectionProductsRef);
    
    const documentsData = documentSnapshot.docs.map (doc => {
        return {
            ...doc.data(),
        id: doc.id,
    }
    })
    return documentsData;
};
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
//1 Inicializo Firestore
 const DB = getFirestore(app);

//2 traigo todos los docs
export default async function getItems() {
  //2 referencio colección
  const colectionProductsRef = collection(DB, "products");
  //4 solicitamos todos los docs de la colección
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return documentsData;
} 
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHaIYxGrOp5Rd2QCuoxryq-hGa8ccy4S0",
  authDomain: "tienda-yogui.firebaseapp.com",
  projectId: "tienda-yogui",
  storageBucket: "tienda-yogui.appspot.com",
  messagingSenderId: "719295741521",
  appId: "1:719295741521:web:e9707171542ba067900270"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

// traer todos los docs
export default async function getItems() {

  const colectionProductsRef = collection(DB, "products");

  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map( (doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return documentsData;
  
}

// traer un doc x id
export async function getOneItem(idParams){

  const docRef = doc(DB, "products", idParams);
  const docSnapshot = await getDoc(docRef);

  return {
    ...docSnapshot.data(),
    id: docSnapshot.id
  }
}

// traer todos los docs segun la category
export async function getItemsCategory(categoryParams) {
  const collectionRef = collection(DB, "products");
  const q = query(collectionRef, where("category", "==", categoryParams));
  const documentSnapshot = await getDocs(q);

  const documentsData = documentSnapshot.docs.map( (doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return documentsData;
}
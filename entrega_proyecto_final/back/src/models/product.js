import db from "../config/firebase.js";
import { 
    collection,
    addDoc,
    getDoc,
    updateDoc, 
    deleteDoc,
    getDocs,
    doc    
} from "firebase/firestore";

const productsCollection = collection(db, "products");

//CRUD -C=Create, R=Read, U=Update, D=Delete

export const createProduct = async (product) => {
    const productRef = await addDoc(productsCollection, product);
    return { id: productRef.id, ...product };
};


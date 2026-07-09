import db from "../config/firebase.js";
import {
  collection,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

//CRUD -C=Create, R=Read, U=Update, D=Delete

export const createProductModel = async (product) => {
  const productRef = await addDoc(productsCollection, product);
  return { id: productRef.id, ...product };
};

export const getProductsModel = async () => {
  const snapshot = await getDocs(productsCollection);

  const products = [];

  snapshot.forEach((doc) => {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return products;
};

export const getProductByIdModel = async (id) => {
  const productRef = doc(productsCollection, id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

export const deleteProductModel = async (id) => {
  const productRef = doc(productsCollection, id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }
  const deletedProduct = {
    id: snapshot.id,
    ...snapshot.data(),
  };

  await deleteDoc(productRef);

  return deletedProduct;
};

import db from "../config/firebase.js";
import { collection,addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

const products = [
  { name: "Auriculares inalámbricos", price: 29.99 },
  { name: "Teclado mecánico", price: 59.99 },
  { name: "Mouse ergonómico", price: 24.99 },
  { name: "Cargador portátil", price: 39.99 },
  { name: "Altavoz Bluetooth", price: 49.99 },
];

const createProducts = () => {

    products.forEach(async (product) => {
        await addDoc(productsCollection, product);
});
};


createProducts();
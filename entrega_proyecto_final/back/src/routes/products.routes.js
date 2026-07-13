import express from "express";
import { Router } from "express";
const router = Router();

import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

//Prefijo de ruta: /api/

router.get("/products", getProducts); // Obtener todos los productos
router.get("/products/:id", getProductById); // Obtener un producto por su ID
router.post("/products/create", auth, createProduct); // Crear un nuevo producto
router.delete("/products/:id", auth, deleteProduct); // Eliminar un producto por su ID

export default router;

import express from "express";
import { Router } from "express";
const router = Router();

import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";  


//Prefijo de ruta: /api/products


router.get("/", getProducts); // Obtener todos los productos
router.get("/:id", getProductById); // Obtener un producto por su ID
router.post("/", createProduct); // Crear un nuevo producto
//router.put("/:id", updateProduct); // Actualizar un producto existente
router.delete("/:id", deleteProduct); // Eliminar un producto por su ID 



/*
//GET /api/products - Obtener todos los productos
router.get("/products", (req, res) => {
  res.send("lista de todos los productos");
});

//GET /api/products/:id - Obtener un producto por su ID
router.get("/products/:id", (req, res) => {
  res.send(`Detalles del producto con ID: ${req.params.id}`);
});

//POST /api/products/create - Crear un nuevo producto
router.post("/products/create", (req, res) => {
  res.send("Producto creado con éxito");
});

//PUT /api/products/:id - Actualizar un producto existente
router.put("/products/:id", (req, res) => {
  res.send(`Producto con ID: ${req.params.id} actualizado`);
});

//PATCH /api/products/:id - Actualizar parcialmente un producto
router.patch("/products/:id", (req, res) => {
  res.send(`Producto con ID: ${req.params.id} actualizado parcialmente`);
});

//DELETE /api/products/:id - Eliminar un producto por su ID
router.delete("/products/:id", (req, res) => {
  res.send(`Producto con ID: ${req.params.id} eliminado`);
});

*/


export default router;

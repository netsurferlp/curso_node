import express from "express";
import { Router } from "express";
const router = Router();
router.get("/login", (req, res) => {
res.json([
  {id:1, name: "Ana"},
  {id: 2, name: Pedro},
]);
});
/*
//POST /auth/login - Iniciar sesión
router.post("/login", (req, res) => {
  res.send("Login exitoso (Bearer token generado)");
});
*/
export default router;

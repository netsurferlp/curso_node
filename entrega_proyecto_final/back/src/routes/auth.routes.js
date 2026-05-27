import express from "express";
const router = express.Router();

//POST /auth/login - Iniciar sesión
router.post("/login", (req, res) =>
  res.send("Login exitoso (Bearer token generado)"),
);

export default router;

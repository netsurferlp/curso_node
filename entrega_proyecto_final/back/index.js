import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import chalk from "chalk";
import bodyParser from "body-parser";

import authRouter from "./src/routes/auth.routes.js";
import productRouter from "./src/routes/products.routes.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.json({ message: "Servidor funcionando correctamente 🚀" });  
});
app.use("/auth", authRouter);
app.use("/api", productRouter);


app.get("/up", (req, res) => {
  res.json({ 
    status: "UP",
    message: "Servidor operativo y listo para recibir solicitudes 🚀"
    
  });
});


// Manejador de error 404 para rutas no definidas
app.use((req, res, next) => {
  res
    .status(404)
    .json({ message: "❌ Ruta no encontrada - Asegúrate de que la URL es correcta" });
}); // [1, 4, 5]



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(chalk.green(`🚀 Servidor corriendo en puerto ${PORT}`));
  console.log(
    chalk.blue(`☑️  Servidor escuchando en http://localhost:${PORT}`),
  );
});

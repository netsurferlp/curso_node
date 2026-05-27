import express from "express";
import cors from "cors";
import chalk from "chalk";
import bodyParser from "body-parser";
import "dotenv/config";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // Procesa cuerpos en formato JSON [1, 3]
// Rutas
app.get("/", (req, res) => {
  res.send("API de Tienda Online funcionando 🚀");
});
app.use("/auth", authRouter);
app.use("/api", productRouter);

// Manejador de error 404 para rutas no definidas
app.use((req, res, next) => {
  res
    .status(404)
    .send("❌ Ruta no encontrada - Asegúrate de que la URL es correcta");
}); // [1, 4, 5]

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(chalk.green(`🚀 Servidor corriendo en puerto ${PORT}`));
  console.log(
    chalk.blue(`☑️  Servidor escuchando en http://localhost:${PORT}`),
  );
});

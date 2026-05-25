import express from 'express';
import cors from 'cors';
import chalk from 'chalk';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(chalk.green(`🚀 Servidor corriendo en puerto ${PORT}`));
    console.log(chalk.blue(`Servidor escuchando en http://localhost:${PORT}`));
}); 
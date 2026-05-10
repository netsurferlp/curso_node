import chalk from 'chalk';

// Importamos la librería chalk para mejorar la apariencia de los logs en la consola
import { welcomeMessage } from './inicio.js';
import { analizarEntrada } from './analizar.js';
import { sanitizarEntrada } from './sanitizar.js';
import { processGetRequest } from './processGet.js'; 
import { processDeleteRequest } from './processDelete.js';  
import { processPostRequest } from './processPost.js';
import { processPutRequest } from './processPut.js';



welcomeMessage();
const { methodUnChecked, endpointUnchecked, args, title, price, category } = analizarEntrada();
const { method, endpoint, product, id, resource } = sanitizarEntrada(methodUnChecked, endpointUnchecked, title, price, category); 


// Ahora manejamos las diferentes operaciones según el método HTTP y el endpoint proporcionados. Utilizamos un switch para organizar el código de manera clara y legible.
switch (method) {
  case "GET":
    // Para las solicitudes GET, verificamos si el endpoint es "products" para obtener todos los productos o si incluye un ID para obtener un producto específico.

    await processGetRequest(endpoint, id);

    break;

  case "POST":
    // Para las solicitudes POST, verificamos que el endpoint sea "products" para crear un nuevo producto utilizando los datos proporcionados en los argumentos.
    await processPostRequest(endpoint, product);  


    break;

  case "PUT":
    // Para las solicitudes PUT, verificamos que el endpoint incluya un ID para actualizar un producto específico utilizando los datos proporcionados en los argumentos.
      await processPutRequest(endpoint, id, product);
    break;

  case "DELETE":
    // Para las solicitudes DELETE, verificamos que el endpoint incluya un ID para eliminar un producto específico.
   await processDeleteRequest(endpoint, id);





    break;

  default:
    // Si el método HTTP no coincide con ninguno de los casos anteriores, mostramos un mensaje indicando que el método es desconocido.
    console.log(chalk.red("❌ Ingreso un Método desconocido, por favor ingrese GET, POST, PUT o DELETE"));
    process.exit(1); // Salimos del programa con un código de error
}

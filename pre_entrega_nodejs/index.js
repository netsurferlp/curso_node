import chalk from 'chalk';

// Importamos la librería chalk para mejorar la apariencia de los logs en la consola
import { welcomeMessage } from './inicio.js';
import { analizarEntrada } from './analizar.js';
import { sanitizarEntrada } from './sanitizar.js';

welcomeMessage();
const { methodUnChecked, endpointUnchecked, args, title, price, category } = analizarEntrada();
const { method, endpoint, product, id, resource } = sanitizarEntrada(methodUnChecked, endpointUnchecked, title, price, category); 





// Ahora manejamos las diferentes operaciones según el método HTTP y el endpoint proporcionados. Utilizamos un switch para organizar el código de manera clara y legible.
switch (method) {
  case "GET":
    // Para las solicitudes GET, verificamos si el endpoint es "products" para obtener todos los productos o si incluye un ID para obtener un producto específico.
    console.log(chalk.blue(`ℹ️ Procesando solicitud GET...`));
    if (endpoint === "products") {
      console.log(chalk.blue(`ℹ️ Obteniendo todos los productos...`));
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(chalk.red("❌ Error al obtener los productos:", error));
        process.exit(1); // Salimos del programa con un código de error
      }
    }
    
else if (id != undefined && id != '' )  {
  console.log(chalk.blue(`ℹ️ Obteniendo producto con ID: ${id}...`));
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(chalk.red(`❌ Error al obtener producto con ID ${id}:`, error));
        process.exit(1); // Salimos del programa con un código de error
      }
}   
     else {
      console.log(chalk.red("❌ Endpoint desconocido"));
      process.exit(1); // Salimos del programa con un código de error
    }

    break;

  case "POST":
    // Para las solicitudes POST, verificamos que el endpoint sea "products" para crear un nuevo producto utilizando los datos proporcionados en los argumentos.
    console.log(chalk.blue(`ℹ️ Procesando solicitud POST...`));
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(chalk.red("❌ Error al crear producto:", error));
        process.exit(1); // Salimos del programa con un código de error
      } 


    break;

  case "PUT":
    // Para las solicitudes PUT, verificamos que el endpoint incluya un ID para actualizar un producto específico utilizando los datos proporcionados en los argumentos.
    console.log(chalk.blue(`ℹ️ Procesando solicitud PUT...`));
    if (id != undefined && id != '') {
      console.log(chalk.blue(`ℹ️ Actualizando producto con ID: ${id}...`));
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(chalk.red(`❌ Error al actualizar producto con ID ${id}:`, error));
        process.exit(1); // Salimos del programa con un código de error
      }
    }
    break;

  case "DELETE":
    // Para las solicitudes DELETE, verificamos que el endpoint incluya un ID para eliminar un producto específico.
    console.log(chalk.blue(`ℹ️ Procesando solicitud DELETE...`));
    if (id != undefined && id != '') {
      console.log(chalk.blue(`ℹ️ Eliminando producto con ID: ${id}...`));
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(chalk.red(`❌ Error al eliminar producto con ID ${id}:`, error));
        process.exit(1); // Salimos del programa con un código de error
      }
    }





    break;

  default:
    // Si el método HTTP no coincide con ninguno de los casos anteriores, mostramos un mensaje indicando que el método es desconocido.
    console.log(chalk.red("❌ Método desconocido"));
    process.exit(1); // Salimos del programa con un código de error
}

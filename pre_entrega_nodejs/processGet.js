import chalk from 'chalk';
// Importamos la librería chalk para mejorar la apariencia de los logs en la consola

export async function processGetRequest(endpoint, id) {



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
      console.log('');
      console.log(chalk.red("❌ Endpoint desconocido"));
      process.exit(1); // Salimos del programa con un código de error
    }

}

// Para las solicitudes GET, verificamos si el endpoint es "products" para obtener todos los productos o si incluye un ID para obtener un producto específico. Si el endpoint no coincide con ninguno de estos casos, mostramos un mensaje de error y salimos del programa. 
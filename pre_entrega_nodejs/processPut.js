import chalk from 'chalk';
// Importamos la librería chalk para mejorar la apariencia de los logs en la consola

export async function processPutRequest(endpoint, id, product) {
console.log(chalk.blue(`ℹ️ Procesando solicitud PUT...`));
if (endpoint === `products/${id}` && id != undefined && id != '' && product.title && product.price && product.category) {
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
     
     
else {
      console.log('');
      if (endpoint !== `products/${id}`) {
        console.log(chalk.red("❌ Endpoint desconocido para PUT"));
      } else if (id == undefined || id == '') {
        console.log(chalk.red("❌ ID de producto no proporcionado para actualización"));
      } else {
        console.log(chalk.red("❌ Datos incompletos para actualizar producto. Se requieren title, price y category."));
      }
      process.exit(1); // Salimos del programa con un código de error
    }   
}

// Para las solicitudes PUT, verificamos que el endpoint incluya un ID para actualizar un producto específico utilizando los datos proporcionados en los argumentos. Si el ID no se proporciona, mostramos un mensaje de error y salimos del programa.  
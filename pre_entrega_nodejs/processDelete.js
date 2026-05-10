import chalk from 'chalk';
// Importamos la librería chalk para mejorar la apariencia de los logs en la consola

export async function processDeleteRequest(endpoint, id) { 
 
 
 
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
        else { console.log('');
      console.log(chalk.red("❌ ID de producto no proporcionado para eliminación"));
      process.exit(1); // Salimos del programa con un código de error
         }
}
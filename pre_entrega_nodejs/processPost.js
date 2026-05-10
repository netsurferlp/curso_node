import chalk from 'chalk';
// Importamos la librería chalk para mejorar la apariencia de los logs en la consola

export async function processPostRequest(endpoint, product) {   

console.log(chalk.blue(`ℹ️ Procesando solicitud POST...`));
if (endpoint === "products" && product.title && product.price && product.category) {
      console.log(chalk.blue(`ℹ️ Creando nuevo producto...`));   





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
    }
else {
      console.log('');
      if (endpoint !== "products") {
        console.log(chalk.red("❌ Endpoint desconocido para POST"));
      } else {
        console.log(chalk.red("❌ Datos incompletos para crear producto. Se requieren title, price y category."));
      } 
     
      process.exit(1); // Salimos del programa con un código de error
    }
}

// Para las solicitudes POST, verificamos que el endpoint sea "products" para crear un nuevo producto utilizando los datos proporcionados en los argumentos. Si el endpoint no coincide con este caso, mostramos un mensaje de error y salimos del programa.
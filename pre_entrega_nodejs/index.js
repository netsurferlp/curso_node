import chalk from 'chalk';
// Importamos la librería chalk para mejorar la apariencia de los logs en la consola
console.log(chalk.green("Iniciando la aplicación..."));
console.log(chalk.blue("_____________________________________________________________"));
console.log("");
console.log(chalk.blue("ℹ️  Analizando entrada de la línea de comandos..."));
const [,, methodUnChecked, endpointUnchecked,...args] = process.argv;
console.log(chalk.blue(`ℹ️  Metodo HTTP Ingresado: ${methodUnChecked}`));
console.log(chalk.blue(`ℹ️  Endpoint Ingresado: ${endpointUnchecked}`));

let [title, price, category] = args;

console.log(chalk.blue(`ℹ️  Argumentos: ${args}`));
// Desestructuramos los argumentos adicionales para obtener el título, precio y categoría del producto para las operaciones POST y PUT.

console.log("");
//Capturamos los argumentos de la linea de comandos, el método HTTP, el endpoint y los argumentos adicionales (title, price, category)


let method = methodUnChecked.toUpperCase();
let endpoint = endpointUnchecked.toLowerCase();

console.log(chalk.green`✅ Metodo HTTP (normalizado): ${method}`);
console.log(chalk.green`✅ Endpoint (normalizado): ${endpoint}`);


//Sanitizamos el método y el endpoint para evitar problemas de mayúsculas/minúsculas



const product = {
  title, // Equivale a title: title
  price: Number(price), // IMPORTANTE: convertir a número ya que process.argv siempre trae strings [3, 4]
  category
};
// Creamos un objeto product con los datos proporcionados, asegurándonos de convertir el precio a un número.

let id;
let resource;
if (endpoint.startsWith("products/")) {

const parts = endpoint.split("/");
resource = parts[0];
id = Number(parts[1]); // Convertimos el ID a número para validarlo correctamente

if (id.isInteger && id > 0) {
  console.log(chalk.green(`✅ ID válido: ${id}`));
console.log(chalk.green(`✅  Recurso: ${resource}`));

console.log("");




} 
else {
  console.log(chalk.red(`❌ ID inválido: ${id}. El ID debe ser un número entero positivo.`));
  process.exit(1); // Salimos del programa con un código de error
}

}

// Si el endpoint comienza con "products/", separamos el recurso y el ID para las operaciones que requieren un ID específico (GET, PUT, DELETE).


// Ahora manejamos las diferentes operaciones según el método HTTP y el endpoint proporcionados. Utilizamos un switch para organizar el código de manera clara y legible.
switch (method) {
  case "GET":
    // Para las solicitudes GET, verificamos si el endpoint es "products" para obtener todos los productos o si incluye un ID para obtener un producto específico.
    console.log("Procesando solicitud GET...");
    if (endpoint === "products") {
      console.log("Obteniendo todos los productos...");
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    }
    
else if (id != undefined && id != '' )  {
  console.log(`Obteniendo producto con ID: ${id}...`);
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(`Error al obtener producto con ID ${id}:`, error);
      }
}   
     else {
      console.log("Endpoint desconocido");
    }

    break;

  case "POST":
    // Para las solicitudes POST, verificamos que el endpoint sea "products" para crear un nuevo producto utilizando los datos proporcionados en los argumentos.
    console.log("Procesando solicitud POST...");
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
        console.error("Error al crear producto:", error);
      } 


    break;

  case "PUT":
    // Para las solicitudes PUT, verificamos que el endpoint incluya un ID para actualizar un producto específico utilizando los datos proporcionados en los argumentos.
    console.log("Procesando solicitud PUT...");
    if (id != undefined && id != '') {
      console.log(`Actualizando producto con ID: ${id}...`);
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
        console.error(`Error al actualizar producto con ID ${id}:`, error);
      }
    }
    break;

  case "DELETE":
    // Para las solicitudes DELETE, verificamos que el endpoint incluya un ID para eliminar un producto específico.
    console.log("Procesando solicitud DELETE...");
    if (id != undefined && id != '') {
      console.log(`Eliminando producto con ID: ${id}...`);
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(`Error al eliminar producto con ID ${id}:`, error);
      }
    }





    break;

  default:
    // Si el método HTTP no coincide con ninguno de los casos anteriores, mostramos un mensaje indicando que el método es desconocido.
    console.log("Método desconocido");
}

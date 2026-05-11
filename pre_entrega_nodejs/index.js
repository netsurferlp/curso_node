// Importamos la librería chalk para mejorar la apariencia de los logs en la consola con colores y estilos, lo que facilita la identificación de mensajes de información, éxito o error durante la ejecución de la aplicación.
import chalk from 'chalk';

//----------------------------------------------------------------------------------------------------------------

//El sistema fue modularizado para mejorar la organización del código y facilitar su mantenimiento. Cada función tiene una responsabilidad clara, lo que hace que el código sea más legible y fácil de entender. Además, se han agregado mensajes de error detallados para ayudar a los usuarios a identificar rápidamente cualquier problema con su entrada o con las solicitudes a la API.

//----------------------------------------------------------------------------------------------------------------
// La función welcomeMessage muestra un mensaje de bienvenida al iniciar la aplicación, indicando que se está iniciando y proporcionando una separación visual para mejorar la legibilidad de los logs posteriores.
export function welcomeMessage(){
  console.log(chalk.green("Iniciando la aplicación..."));
  console.log(chalk.blue("_____________________________________________________________"));
  console.log("");
}

//-----------------------------------------------------------------------------------------------------------------

// La función analizarEntrada se encarga de capturar y mostrar la entrada proporcionada por el usuario a través de la línea de comandos. Desestructura los argumentos para obtener el método HTTP, el endpoint y los argumentos adicionales (title, price, category) necesarios para las operaciones POST y PUT. También muestra esta información en la consola para que el usuario pueda verificar lo que ha ingresado antes de continuar con el procesamiento de la solicitud.
export function analizarEntrada() {
console.log(chalk.blue("ℹ️  Analizando entrada de la línea de comandos..."));
const [,, methodUnChecked, endpointUnchecked,...args] = process.argv;
console.log(chalk.blue(`ℹ️  Metodo HTTP Ingresado: ${methodUnChecked}`));
console.log(chalk.blue(`ℹ️  Endpoint Ingresado: ${endpointUnchecked}`));

let [title, price, category] = args;

console.log(chalk.blue(`ℹ️  Argumentos: ${args}`));
// Desestructuramos los argumentos adicionales para obtener el título, precio y categoría del producto para las operaciones POST y PUT.

console.log("");
//Capturamos los argumentos de la linea de comandos, el método HTTP, el endpoint y los argumentos adicionales (title, price, category)
return { methodUnChecked, endpointUnchecked, args, title, price, category };

}

//----------------------------------------------------------------------------------------------------------------
// La función sanitizarEntrada se encarga de validar y normalizar la entrada proporcionada por el usuario. Verifica que el método HTTP y el endpoint no sean undefined, y luego los normaliza a mayúsculas para el método y a minúsculas para el endpoint. También crea un objeto product con los datos proporcionados, asegurándose de convertir el precio a un número. Si el endpoint incluye un ID, lo valida para asegurarse de que sea un número entero positivo y no mayor a 20, ya que la API de fakestore solo tiene productos con IDs del 1 al 20. Si alguna validación falla, muestra un mensaje de error y sale del programa con un código de error.
export function sanitizarEntrada(methodUnChecked, endpointUnchecked, title, price, category)
{let method;
let endpoint;

if (methodUnChecked !== undefined && endpointUnchecked !== undefined) {
method = methodUnChecked.toUpperCase();
endpoint = endpointUnchecked.toLowerCase();

console.log(chalk.green`✅ Metodo HTTP (normalizado): ${method}`);
console.log(chalk.green`✅ Endpoint (normalizado): ${endpoint}`);
console.log("");
}else{
  console.log(chalk.red("❌ Método HTTP o Endpoint no proporcionados o inválidos"));
  process.exit(1); // Salimos del programa con un código de error 
}
//Sanitizamos el método y el endpoint para evitar problemas de mayúsculas/minúsculas o valores vacios.

const product = {
  title, 
  price: Number(price),
  category
};
// Creamos un objeto product con los datos proporcionados, asegurándonos de convertir el precio a un número.

let id;
let resource;
if (endpoint.startsWith("products/")) {

const parts = endpoint.split("/");
resource = parts[0];
id = Number(parts[1]); // Convertimos el ID a número para validarlo correctamente

if (Number.isInteger(id) && id > 0 && id <= 20) {
  console.log(chalk.green(`✅ ID válido: ${id}`));
  console.log(chalk.green(`✅ Recurso: ${resource}`));

console.log("");

} 
else {
  console.log(chalk.red(`❌ ID inválido: ${id}. El ID debe ser un número entero positivo y no mayor a 20`));
  process.exit(1); // Salimos del programa con un código de error
}

}

// Si el endpoint comienza con "products/", separamos el recurso y el ID para las operaciones que requieren un ID específico (GET, PUT, DELETE). Validamos que el ID sea un número entero positivo y no mayor a 20, ya que la API de fakestore solo tiene productos con IDs del 1 al 20. Si el ID es válido, lo mostramos en la consola; de lo contrario, mostramos un mensaje de error y salimos del programa.

return { method, endpoint, title, price, category, product, id, resource };

}   

//----------------------------------------------------------------------------------------------------------
// La función processGetRequest se encarga de manejar las solicitudes GET. Verifica si el endpoint es "products" para obtener todos los productos o si incluye un ID para obtener un producto específico. Si el endpoint no coincide con ninguno de estos casos, muestra un mensaje de error y sale del programa con un código de error. Si la solicitud es válida, realiza la llamada a la API correspondiente y muestra los datos obtenidos en la consola. Si ocurre algún error durante la solicitud, muestra un mensaje de error detallado y sale del programa con un código de error.
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

//-------------------------------------------------------------------------------------------------------------
// La función processPostRequest se encarga de manejar las solicitudes POST. Verifica que el endpoint sea "products" para crear un nuevo producto utilizando los datos proporcionados en los argumentos. Si el endpoint no coincide con este caso, muestra un mensaje de error y sale del programa con un código de error. Si la solicitud es válida, realiza la llamada a la API para crear el producto y muestra los datos obtenidos en la consola. Si ocurre algún error durante la solicitud, muestra un mensaje de error detallado y sale del programa con un código de error.
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

//--------------------------------------------------------------------------------------------------------------

// La función processPutRequest se encarga de manejar las solicitudes PUT. Verifica que el endpoint incluya un ID para actualizar un producto específico utilizando los datos proporcionados en los argumentos. Si el endpoint no coincide con este caso, muestra un mensaje de error y sale del programa con un código de error. Si la solicitud es válida, realiza la llamada a la API para actualizar el producto y muestra los datos obtenidos en la consola. Si ocurre algún error durante la solicitud, muestra un mensaje de error detallado y sale del programa con un código de error.
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

//-------------------------------------------------------------------------------------------------------------

// La función processDeleteRequest se encarga de manejar las solicitudes DELETE. Verifica que el endpoint incluya un ID para eliminar un producto específico. Si el endpoint no coincide con este caso, muestra un mensaje de error y sale del programa con un código de error. Si la solicitud es válida, realiza la llamada a la API para eliminar el producto y muestra los datos obtenidos en la consola. Si ocurre algún error durante la solicitud, muestra un mensaje de error detallado y sale del programa con un código de error.
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


//-----------------------------------------------------------------------------------------------------------------

//Iniciamos la aplicación mostrando un mensaje de bienvenida, luego analizamos y sanitizamos la entrada proporcionada por el usuario a través de la línea de comandos. Finalmente, manejamos las diferentes operaciones según el método HTTP y el endpoint proporcionados utilizando un switch para organizar el código de manera clara y legible.

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

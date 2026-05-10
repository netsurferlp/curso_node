import chalk from "chalk";

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
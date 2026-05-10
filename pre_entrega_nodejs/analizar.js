import chalk from 'chalk';
// Importamos la librería chalk para mejorar la apariencia de los logs en la consola

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

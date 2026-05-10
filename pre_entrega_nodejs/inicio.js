import chalk from 'chalk';

// Importamos la librería chalk para mejorar la apariencia de los logs en la consola
export function welcomeMessage(){
  console.log(chalk.green("Iniciando la aplicación..."));
  console.log(chalk.blue("_____________________________________________________________"));
  console.log("");
}


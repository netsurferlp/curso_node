
# 🚀 Curso Node.js: Proyecto Pre-Entrega## 📋 Requerimientos del Proyecto

## Requerimiento #1: Configuración Inicial

* Directorio: Crea un directorio dedicado para el proyecto con un archivo index.js como punto de entrada.
* Inicialización: Configura el entorno con npm init -y.
* ESModules: Habilita el uso de módulos agregando "type": "module" en el archivo package.json.
* Scripts: Configura un script llamado start para ejecutar la aplicación mediante el comando npm run start.

------------------------------

## Requerimiento #2: Lógica de Gestión de Productos

El sistema debe interpretar comandos desde la terminal e interactuar con la API FakeStore para ejecutar las siguientes acciones:

## 1. Consultar Todos los Productos

Al ejecutar el comando, el programa debe realizar una petición asíncrona y devolver la lista completa.

* Comando: npm run start GET products

## 2. Consultar un Producto Específico

Obtiene y muestra el producto correspondiente al ID indicado en la ruta.

* Comando: npm run start GET products/<productId>
* Ejemplo: npm run start GET products/15

## 3. Crear un Producto Nuevo

Envía una petición POST con los datos proporcionados y devuelve el resultado.

* Comando: npm run start POST products <title> <price> <category>
* Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras

## 4. Eliminar un Producto

Envía una petición DELETE para remover el producto indicado por su ID.

* Comando: npm run start DELETE products/<productId>
* Ejemplo: npm run start DELETE products/7

------------------------------

## 💡 Tips de Desarrollo

* Captura de datos: Usa process.argv para capturar los comandos de la línea de comandos.

* Interacción API: Implementa fetch para conectar con FakeStore.
* Manipulación de datos: Aprovecha el destructuring y el operador spread.
* Procesamiento: Utiliza métodos de arrays y strings para normalizar y extraer solo la información necesaria.

------------------------------
¿Necesitas que agregue una sección de "Estado del Proyecto" indicando que ya pasaste los tests?

# 📦 Proyecto: Gestión de Productos - FakeStore API

Este proyecto es una herramienta de línea de comandos (CLI) desarrollada en Node.js para interactuar con la API de [FakeStore](https://fakestoreapi.com). Permite realizar operaciones CRUD (GET, POST, PUT, DELETE) sobre un catálogo de productos.

## 🚀 Instalación y Requisitos

1. **Requisitos:** Node.js (v18 o superior) y un gestor de paquetes como `npm` o `pnpm`.
2. **Dependencias:** El proyecto utiliza la librería `chalk` para mejorar la visualización de los logs en consola.
3. **Instalación:**

   ```bash
   npm install chalk
   ```

## 🛠️ Uso (Comandos)

El programa se ejecuta mediante scripts de `npm` siguiendo esta estructura:

- **Consultar todos los productos:**
  `npm run start GET products`
- **Consultar un producto específico (ID 1-20):**
  `npm run start GET products/15`
- **Crear un producto:**
  `npm run start POST products "Título del producto" 300 "Categoría"`
- **Actualizar un producto:**
  `npm run start PUT products/7 "Nuevo Título" 500 "Ropa"`
- **Eliminar un producto:**
  `npm run start DELETE products/7`

## 🧠 Características Técnicas

- **ESModules:** Uso de `import/export` nativo.
- **Asincronía:** Implementación de `async/await` para peticiones a la API.
- **Sanitización:** Normalización de entradas para evitar errores de mayúsculas/minúsculas.
- **Validación:** Control de IDs válidos (1-20) y verificación de argumentos obligatorios.

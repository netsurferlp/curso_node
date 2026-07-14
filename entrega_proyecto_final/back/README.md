# Trabajo Final: API Rest para Gestión de Tienda Online

Este proyecto consiste en la construcción de una **API Rest robusta** diseñada para administrar el catálogo de productos de una tienda en línea, incluyendo funcionalidades de autenticación y persistencia de datos en la nube.

## 📋 Premisa

La aplicación debe permitir la administración completa de productos (CRUD) y contar con una capa de seguridad para el resguardo de los datos. Se debe contemplar un manejo de errores claro:

- **404**: Rutas no definidas.
- **401 y 403**: Errores de autenticación y permisos.
- **400 y 500**: Peticiones con errores o fallas en servicios externos.

---

## 🚀 Requerimientos del Proyecto

### 1. Configuración Inicial

- Crear un directorio de proyecto con `index.js` como punto de entrada.
- Inicializar con `npm init -y` o `pnpm init`.
- Configurar `"type": "module"` en `package.json` para habilitar **ESModules**.
- Definir un script `start` para ejecutar el programa con `npm run start`.

### 2. Instalación de Dependencias

Es necesario instalar las siguientes librerías:

- `express`, `cors`, `body-parser`, `dotenv`, `firebase`, `jsonwebtoken`.

### 3. Configuración del Servidor

- Crear y configurar el servidor web en `index.js`.
- Habilitar **CORS** para peticiones de origen cruzado.
- Configurar el middleware global de **body-parser** para procesar JSON.
- Implementar un middleware para manejar rutas desconocidas (Error 404).
- Crear un archivo `.env` para proteger las variables de entorno.

### 4. Capa de Rutas (Endpoints)

Definir los siguientes puntos de entrada:

#### **Productos (`products.routes.js`)**

- `GET /api/products`: Devuelve todos los productos.
- `GET /api/products/:id`: Devuelve el producto con el ID indicado.
- `POST /api/products/create`: Guarda un nuevo producto enviado en el body.
- `DELETE /api/products/:id`: Elimina el producto especificado.

#### **Autenticación (`auth.routes.js`)**

- `POST /auth/login`: Valida credenciales y devuelve un **Bearer Token**.

#### CREDENCIALES

- email `admin@example.com`
- password admin123

### 5. Arquitectura Basada en Capas

Organizar el código de forma modular y escalable:

- **Controladores**: Coordinan la recepción de solicitudes y envío de respuestas.
- **Servicios**: Contienen la lógica de negocio y procesamiento de datos.
- **Modelos**: Gestionan la interacción directa con la fuente de datos.

### 6. Acceso a Datos (Firebase Firestore)

- Crear un proyecto en **Firebase** y configurar una base de datos **Firestore**.
- Crear una colección de productos e insertar el primer documento para definir la estructura.
- Vincular la instancia de Firebase en el proyecto mediante el SDK.
- Implementar los métodos del modelo para que interactúen con la base de datos remota.

### 7. Seguridad y Autenticación (JWT)

- Configurar **JSON Web Tokens** en el proyecto.
- Crear un middleware de autenticación para proteger las rutas de administración.
- Implementar la lógica en el controlador de login para validar la identidad y emitir el token.

### 8. Deploy en Servidor Dedicado Propio

- Utilice mi servidor LAMP <http://www.netsurferlp.com.ar:5000>
- El puerto es el 5000.

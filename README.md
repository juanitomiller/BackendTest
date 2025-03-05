# Proyecto Backend

## Descripción General
Este proyecto es un backend desarrollado con **Node.js** y **Express.js**, estructurado de manera ordenada utilizando **modelos y controladores** para una mejor organización del código. Se encarga de gestionar la lógica del negocio y la comunicación con la base de datos alojada en **Render**.

## Tecnologías y Dependencias
Este backend usa las siguientes tecnologías y dependencias principales:

- **Express.js** (^4.21.2) - Framework para la creación de APIs
- **PostgreSQL (pg y pg-format)** (^8.13.2 y ^1.0.4) - Base de datos relacional
- **jsonwebtoken** (^9.0.2) - Para manejo de autenticación con JWT
- **bcrypt & bcryptjs** (^5.1.1 y ^3.0.0) - Para el cifrado de contraseñas
- **dotenv** (^16.4.7) - Para manejo de variables de entorno
- **cors** (^2.8.5) - Para habilitar el intercambio de recursos entre dominios
- **morgan** (^1.10.0) - Para registro de peticiones HTTP en la terminal
- **jest & supertest** (^29.7.0 y ^7.0.0) - Para pruebas unitarias y de integración
- **nodemon** (^3.1.9) - Para recarga automática en desarrollo

## Instalación y Ejecución en Local
Para ejecutar el backend en tu entorno local, sigue estos pasos:

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/juanitomiller/BackendTest
   cd proyecto-backend
   ```

2. Instalar las dependencias:
   ```sh
   npm install
   ```

3. Configurar las variables de entorno:
   - Crear un archivo `.env` en la raíz del proyecto con las credenciales necesarias (ejemplo: conexión a PostgreSQL, JWT secret, etc.).

4. Ejecutar el servidor en modo desarrollo:
   ```sh
   npm run dev
   ```

5. Para ejecutar en modo producción:
   ```sh
   npm start
   ```

6. Para correr las pruebas:
   ```sh
   npm test
   ```

## Estructura del Proyecto
Archivos del backend:
```
proyecto-backend/
│-- app.js                          # Punto de configuración general del servidor
│-- index.js                        # Punto de arranque del servidor
│-- db.js                           # Conexión a la base de datos
│-- .env                            # Variables de entorno
│-- package.json                    # Configuración de dependencias y scripts
│-- package-lock.json               # Versión bloqueada de dependencias
│-- node_modules/                   # Dependencias instaladas
│-- test/
│   ├── server.spec.js              # Pruebas unitarias e integración
│-- src/
│   ├── config/
│   │   ├── db.js                   # Configuración de la base de datos
│   │   ├── init.sql                # Script de inicialización de la base de datos
│   ├── controllers/
│   │   ├── auth.controller.js      # Controlador para usuario (login, registro, perfil)
│   │   ├── newsletter.js           # Controlador para newsletter
│   │   ├── products.controller.js  # Controlador para Productos
│   ├── helpers/
│   │   ├── bcrypt.js               # Helper para encriptación de contraseña
│   │   ├── errorsManager.js        # Helper para manejo de errores personalizados
│   │   ├── jwt.js                  # Helper para manejo de token con Json Web Token (firma - decodificación)
│   ├── middlewares/
│   │   ├── authMiddleware.js       # Middleware para Verificar y Validar token usuario
│   │   ├── errorMiddleware.js      # Middleware para los errores personalizados
│   │   ├── loggerMiddleware.js     # Middleware para log
│   ├── models/
│   │   ├── Auth.js                 # Modelo para conectar con la Base de datos y hacer consultas relacionadas con Usuario
│   │   ├── Newsletter.js           # Modelo para conectar con la Base de datos y hacer consultas relacionadas con newsletter
│   │   ├── Products.js             # Modelo para conectar con la Base de datos y hacer consultas relacionadas con Productos
│   ├── routes/
│   │   ├── routes.js               # Configuración de ru
```


## Despliegue
El proyecto está desplegado en **Render**, junto con la base de datos. Puedes acceder a la versión en producción a través del siguiente enlace:

[Acceder a la API](https://backendtest-8l3s.onrender.com/)


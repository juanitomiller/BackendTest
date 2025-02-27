const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Carga variables de entorno

const app = express();

// Middleware para CORS (solo permite peticiones desde tu frontend en Netlify o Vercel)
app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// Importar la ruta de prueba
const testDBRouter = require('./routes/testDB');

// Usar la ruta de prueba
app.use('/api', testDBRouter);

// Puerto dinámico asignado por Render
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
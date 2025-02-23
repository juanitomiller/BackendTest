const app = require('./src/app');
const port = process.env.PORT || 3000;	

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

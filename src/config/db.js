require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: 5432,
    allowExitOnIdle: true
});

// Verificar conexión
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error al conectar con la base de datos:', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
            return console.error('Error ejecutando consulta:', err.stack);
        }
        console.log('Conexión exitosa a la base de datos');
    });
});

module.exports = { pool };
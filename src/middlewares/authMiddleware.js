const { verifyToken, decodeToken } = require('../helpers/jwt');
const jwt = require('jsonwebtoken');
const Auth = require('../models/Auth');


// Middleware para verificar las credenciales del usuario
const verificarCredencialesMiddleware = async (req, res, next) => { 
    try {
        const { email, password } = req.body;

        // Verificar si el email y la contraseña están presentes
        if (!email || !password) {
            return res.status(400).send({ error: 'Email y contraseña son requeridos' });
        }

        const user = await Auth.login(email, password);
        req.user = user; // Adjunta el usuario al objeto req
        next();
    } catch (error) {
        next(error);
    }
};

// Middleware para validar el token de autenticación
const validarTokenMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");

        // Verificar si el encabezado de autorización está presente
        if (!authHeader) {
            return res.status(401).send({ error: 'Encabezado de autorización no proporcionado' });
        }

        const token = authHeader.split("Bearer ")[1];

        // Verificar si el token está presente
        if (!token) {
            return res.status(401).send({ error: 'Token no proporcionado en el encabezado de autorización' });
        }

        const decoded = verifyToken(token); // Verifica el token
        req.user = decoded; // Decodifica y adjunta al objeto req
        next();
    } catch (error) {

        // Manejo de errores específicos
        if (error.name === "JsonWebTokenError") {// Error si el token es inválido
            return res.status(401).send({ error: 'Token inválido' });
        }
        if (error.name === "TokenExpiredError") {// Error si el token ha expirado
            return res.status(401).send({ error: 'Token expirado' });
        }
        next(error); // Pasa errores desconocidos al manejador de errores
    }
};

module.exports = {
    verificarCredencialesMiddleware,
    validarTokenMiddleware
};
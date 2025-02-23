const { pool } = require('../config/db');
const { signToken } = require('../helpers/jwt');
const Auth = require('../models/Auth');


const handleRegister = async (req, res, next) => { // Controlador para registrar usuario
    try {
        const { username, password, email, direccion, telefono, rol } = req.body;

        // Validar que todos los campos estén presentes
        if(!username || !password || !email || !direccion || !telefono || !rol){
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        // Registrar usuario
        const user = await Auth.register(username, password, email, direccion, telefono, rol);
        res.status(201).json({ 
            message: 'Usuario registrado con éxito',
            user 
        });
    } catch (error) {
        next(error);
    }
}


const handleLogin = async (req, res, next) => { // Controlador para iniciar sesión
    try {
        const { email } = req.user;
        const data = { email }
        const token = signToken(data);

        res.status(200).json({ token })
    } catch (error) {
        next(error);
    }
};


const handleGetUser = async (req, res, next) => { // Controlador para obtener los datos del usuario
    try {
        const { email } = req.user; // Extrae el email del token decodificado
        const consulta = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const { rows: [user] } = await pool.query(consulta, values);

        if(!user){
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json([user]); // Retorna todos los datos del usuario
    } catch (error) {
        next(error);
    }
};


module.exports = {
    handleRegister,
    handleLogin,
    handleGetUser
}
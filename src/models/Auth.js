const { pool } = require('../config/db');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');

const register = async (username, password, email, direccion, telefono, rol) => {
    try {
        const hashedPasword = hashPassword(password) // Encripta la contraseña
        const consulta = 'INSERT INTO users (username, password, email, direccion, telefono, rol) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const values = [username, hashedPasword, email, direccion, telefono, rol];
        
        const { rows: [user], rowCount } = await pool.query(consulta, values);

        if(!rowCount){
            throw new Error('BAD_REQUEST');
        }
        return user;
    } catch (error) {
        throw error;
    }
};


const verificarCredenciales = async (email, password) => {
    try {
        const consulta = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const { rows: [user], rowCount } = await pool.query(consulta, values);

        if(!rowCount){
            throw new Error('NOT_FOUND');
        }

        if(!comparePassword(password, user.password)){
            throw new Error('NOT_FOUND');// Error si las credenciales no coinciden
        }

        return user;
    } catch (error) {
        throw error;
    }
};


const login = async (email, password) => {
    try {
        return await verificarCredenciales(email, password);// Llama a verificarCredenciales
    } catch (error) {
        throw error;
    }
};



module.exports = {
    register,
    verificarCredenciales,
    login
}
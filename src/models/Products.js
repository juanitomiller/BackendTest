const { pool } = require('../config/db');

const getAllProducts = async () => {
    return await pool.query('SELECT * FROM productos ORDER BY id ASC');
};

const getSaleProducts = async () => {
    return await pool.query('SELECT * FROM productos WHERE sale = true');
};

const getProductById = async (id) => {
    return await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
};

const createProduct = async (name, image, price, original_price, button_text, sale, rating, description, stock) => {
    return await pool.query(
        'INSERT INTO productos (name, image, price, original_price, button_text, sale, rating, description, stock) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [name, image, price, original_price, button_text, sale, rating, description, stock]
    );
};

module.exports = {
    getAllProducts,
    getSaleProducts,
    getProductById,
    createProduct
};
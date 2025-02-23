const productModel = require('../models/Products');

const getProductsSale = async (req, res) => {
    try {
        const result = await productModel.getSaleProducts();
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No hay productos en oferta' });
        }
        res.json(result.rows);
    } catch (error) {
        console.error('Error en getProductsSale:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getProducts = async (req, res) => {
    try {
        const result = await productModel.getAllProducts();
        res.json(result.rows);
    } catch (error) {
        console.error('Error en getProducts:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'ID de producto inválido' });
        }

        const result = await productModel.getProductById(id);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error en getProductById:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, image, price, original_price, sale, rating, description, stock = 1, button_text = 'Añadir' } = req.body;

        // Validaciones básicas
        if (!name || !image || !price || !original_price || sale === undefined || rating === undefined) {
            return res.status(400).json({ 
                message: 'Los campos name, image, price, original_price, sale y rating son obligatorios' 
            });
        }

        // Insertar en la base de datos
        const result = await productModel.createProduct(
            name, image, price, original_price, button_text, sale, rating, description, stock
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error en createProduct:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


module.exports = {
    getProductsSale,
    getProducts,
    getProductById,
    createProduct
};
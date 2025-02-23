const { Router } = require('express');
const { handleLogin, handleRegister, handleGetUser } = require('../controllers/auth.controller');
const { verificarCredencialesMiddleware, validarTokenMiddleware } = require('../middlewares/authMiddleware');
const { getProductsSale, getProducts, getProductById, createProduct } = require('../controllers/products.controller');

const router = Router();

// Rutas de la aplicación
router.get('/', ); // home

// Rutas de productos
router.get('/productossale', getProductsSale); // obtener productos
router.get('/productos', getProducts); // obtener todos los productos
router.get('/productos/:id', getProductById); // obtener producto por id
router.post('/create', createProduct); // crear producto

// Rutas de usuarios
router.post('/login', verificarCredencialesMiddleware, handleLogin); // login
router.post('/register', handleRegister); // registrar usuarios
router.get('/usuario', validarTokenMiddleware, handleGetUser); // obtener usuarios autenticados


module.exports = router;
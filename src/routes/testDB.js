const express = require('express');
const router = express.Router();
const { pool } = require('../config/db.js');

router.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({
            status: 'success',
            message: 'Database connection working!',
            timestamp: result.rows[0].now
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Database connection failed',
            error: error.message
        });
    }
});

module.exports = router;

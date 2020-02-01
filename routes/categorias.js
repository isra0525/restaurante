var express = require('express');
var router = express.Router();

const categoriasController = require('../controllers/categorias');
router.get('/', (req, res) => {
    categoriasController.list().then((success) => {
        res.json({
            message: null,
            data: success
        });
    },(error) => {
        res.status(400).json({
            message: error.message,
        });
    });
});

module.exports = router;
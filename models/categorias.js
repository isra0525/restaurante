const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoria = Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String},
    active: {type: Boolean, default: true}
});

module.exports = mongoose.model('categorias', categoria);

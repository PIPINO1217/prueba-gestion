const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: String,
  precio: {
    type: Number,
    required: true
  },
  cantidad: {
    type: Number,
    required: true,
    default: 0
  },
  categoria: {
    type: String,
    required: true
  },
  costo: {
    type: Number,
    required: true
  },
  codigoUnico: {
    type: String,
    unique: true,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

const Producto = mongoose.model('Producto', productoSchema);
module.exports = Producto;

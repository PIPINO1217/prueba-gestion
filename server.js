const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productoRoutes = require('./routes/producto');

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/gestion_stock', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a la base de datos');
}).catch(err => {
    console.error('Error de conexión a la base de datos', err);
});

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Servir archivos estáticos
app.use('/productos', productoRoutes); // Rutas para productos

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

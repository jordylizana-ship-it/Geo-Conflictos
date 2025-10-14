// 1. Importar los módulos necesarios
const express = require('express');
const path = require('path');

// 2. Crear una instancia de la aplicación Express
const app = express();

// 3. Definir el puerto
const PORT = process.env.PORT || 8000;

// 4. Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// 5. Ruta principal que sirve tu archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 6. Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
  console.log(`Puedes abrir la aplicación en http://localhost:${PORT}`);
});
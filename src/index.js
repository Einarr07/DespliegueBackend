const express = require('express')
const app = express()
const {engine} = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.engine('.hbs',engine({
    extname:'.hbs'
}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/integrantes', (req, res) => {
  res.json([
    {
      "nombre": "Mateo",
      "apellido": "Congo",
      "edad": 22
    },
    {
      "nombre": "Dilan",
      "apellido": "Flores",
      "edad": 21
    },
    {
      "nombre": "Elian",
      "apellido": "Moreira",
      "edad": 21
    },
    {
        "nombre": "Erick",
        "apellido": "Palomo",
        "edad": 22
      },
      {
        "nombre": "Erick",
        "apellido": "Santillan",
        "edad": 21
      },
      {
        "nombre": "Pablo",
        "apellido": "Uchuari",
        "edad": 21
      }
  ]);
});

app.get('/products', (req, res) => {
    res.send(`
      <h1>Catálogo de productos</h1>
      <ul>
        <li>Procesador</li>
        <li>Memoria RAM</li>
        <li>Disco duro</li>
        <li>Tarjeta gráfica</li>
        <li>Placa madre</li>
        <li>Fuente de poder</li>
        <li>Monitor</li>
        <li>Teclado</li>
        <li>Mouse</li>
        <li>Caja de computadora</li>
      </ul>
    `);
  });
  
  


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

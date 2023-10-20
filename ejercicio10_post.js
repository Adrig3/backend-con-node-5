const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());POST

app.post('/mayoromenor/', (req, res) => {
  const a = Number(req.body.primero);
  const b = Number(req.body.segundo);

  let resultado;

  if (a > b) {
    resultado = `El mayor es ${a}`;
  } else if (b > a) {
    resultado = `El mayor es ${b}`;
  } else {
    resultado = 'Son iguales';
  }

  res.send(resultado);
});

app.all('/', (req, res) => {
  res.send(`<p>Puedes ir a la siguiente dirección:
    <br>localhost:5000/mayoromenor/
    <br><br> Enviar una solicitud POST con el cuerpo JSON como {"primero": 5, "segundo": 9} para probar el funcionamiento.
  `);
});

app.listen(5000, () => console.log('Server ready on localhost:5000'));

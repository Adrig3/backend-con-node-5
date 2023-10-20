const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.post('/bienvenida/', (req, res) => {
console.log(req.body.nombre)
const cadena = `Hola! ${req.body.nombre}`
res.send(cadena)
})
app.get('/despedida/', (req, res) => {
const cadena = `Adios! ${req.query.nombre}`
res.send(cadena)
})
app.listen(5000, '127.0.0.1', () => console.log('Server ready on 127.0.0.1:5000'))
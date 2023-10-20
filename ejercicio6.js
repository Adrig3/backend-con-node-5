const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.get('/despedida/', (req, res) => {
const cadena = `Adios! ${req.query.nombre}`
res.send(cadena)
})
app.listen(5000, () => console.log('Server ready'))
const express = require('express')

const port = 8500
const app = express()

app.get('/profile', (req, res) => {
  res.json({
    name: 'pako',
    mail: 'pakorro2@gmail.com',
    age: 36,
    role: 'superadmin'
  })
})

app.post('/job', (req, res) => {
  res.json([
    'Mercado libre',
    'Buk',
    'Bsale'
  ])
})

app.patch('/hobby', (req, res) => {
  res.json([
    'Andar en motosicleta',
    'Fotografia',
    'Ver series, peliculas y anime'
  ])
})

app.listen(port, () => {
  console.log(`app funcionando en puerto ${port}`)
})
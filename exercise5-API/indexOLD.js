const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid');
const port = 5000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const data = require('./data.json')

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

// PRODUCTS ------------------------------------
app.get('/products', (req, res) => {
  res.json(data.products)
})
app.get('/products/:id', (req, res) => {
  console.log(req.params)
  const resultDb = data.products.find(p => p.id == req.params.id)
  res.json(resultDb)
})
app.post('/products', (req, res) => {
  console.log(req.body)
  res.send('Posted')
  products.push({
    idProduct: uuidv4(),
    name: req.body.name,
  })
})
app.delete('/products/:id', (req, res) => {
  const resultIndex = products.findIndex(p => p.idProduct === req.params.id)
  if(resultIndex !== -1) {
    products.splice(resultIndex, 1)
    res.send('Deleted success')
  }
  else {
    res.send('No such product found')
  }
})
app.put('/products/:id', (req, res) => {
  const resultIndex = products.findIndex(p => p.idProduct === req.params.id)
  products[resultIndex].name = req.body.name
  res.send('Updated success')
})

app.get('/products/search', (req, res) => {
  let { idProduct, name, manufacture, category, price } = req.query;
  idProduct = idProduct?.toLowerCase() || '';
  name = name?.toLowerCase() || '';
  manufacture = manufacture?.toLowerCase() || '';
  category = category?.toLowerCase() || '';
  price = price?.toLowerCase() || '';

  res.json(products.filter(p => {
    return String(p.idProduct).includes(idProduct)
    && String(p.name).includes(name)
    && String(p.manufacture).includes(manufacture)
    && String(p.category).includes(category)
    && String(p.price).includes(price);
  }));
});

// USERS ------------------------------------
app.get('/users', (req, res) => {
  res.json(users)
})
app.get('/users/:id', (req, res) => {
  console.log(req.params)
  const resultDb = users.find(p => p.idUser === req.params.id)
  res.json(resultDb)
})
app.post('/users', (req, res) => {
  console.log(req.body) 
  res.send('Posted')
  users.push({
    idUser: uuidv4(),
    username: req.body.username,
  })
})
app.delete('/users/:id', (req, res) => {
  const resultIndex = users.findIndex(p => p.idUser === req.params.id)
  if(resultIndex !== -1) {
    users.splice(resultIndex, 1)
    res.send('Deleted success')
  }
  else {
    res.send('No such user found')
  }
})
app.put('/users/:id', (req, res) => {
  const resultIndex = users.findIndex(p => p.idUser === req.params.id)
  users[resultIndex].username = req.body.username
  res.send('Updated success')
})

//  PURCHASE ------------------------------------
app.get('/users', (req, res) => {
  res.json(users)
})
app.get('/users/:id', (req, res) => {
  console.log(req.params)
  const resultDb = users.find(p => p.id === req.params.id)
  res.json(resultDb)
})
app.post('/users', (req, res) => {
  console.log(req.body) 
  res.send('Posted')
  users.push({
    id: uuidv4(),
    name: req.body.name,
  })
})
app.delete('/users/:id', (req, res) => {
  const resultIndex = users.findIndex(p => p.id === req.params.id)
  if(resultIndex !== -1) {
    users.splice(resultIndex, 1)
    res.send('Deleted success')
  }
  else {
    res.send('No such user found')
  }
})
app.put('/users/:id', (req, res) => {
  const resultIndex = users.findIndex(p => p.id === req.params.id)
  users[resultIndex].name = req.body.name
  res.send('Updated success')
})





















app.listen(port, () => {
  console.log(`APP LISTENING at http://localhost:${port}`)
})
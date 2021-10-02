const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid');
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World')
})

// PRODUCTS ------------------------------------
app.get('/products', (req, res) => {
  // res.send('Hello World')
  res.json(products)
})
app.get('/products/:id', (req, res) => {
  // console.log(`Get productId: ${req.params}`)  // NOTE: ko xuất bên trong object dc
  console.log(req.params)
  // res.send(`Get productId: ${req.params.id}`)
  const resultDb = products.find(p => p.id === req.params.id)
  res.json(resultDb)
})
// app.post('/products', (req, res) => {
//   console.log(req.body)  // body rỗng ???
//   res.send('Posted')
// })

app.post('/products', (req, res) => {
  // console.log(req)
  console.log(req.body)  // NOTE: postman: raw > JSON ||| x-wwww-form-urlencoded 
  res.send('Posted')
  products.push({
    id: uuidv4(),
    name: req.body.name,
  })
})
app.delete('/products/:id', (req, res) => {
  const resultIndex = products.findIndex(p => p.id == req.params.id)
  if(resultIndex !== -1) {
    products.splice(resultIndex, 1)
    res.send('Deleted success')
  }
  else {
    res.send('No such product found')
  }
  // res.send(`Deleted productId: ${req.params.id}`)
})
app.put('/products/:id', (req, res) => {
  const resultIndex = products.findIndex(p => p.id === req.params.id)
  products[resultIndex].name = req.body.name
  res.send('Updated success')
})

// USERS ------------------------------------
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
  const resultIndex = users.findIndex(p => p.id == req.params.id)
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
  const resultIndex = users.findIndex(p => p.id == req.params.id)
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

// if user exist >> post, delete, put products !!!
// if user exist >> CRUD invoice !!!

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

var products = [
  {
    id: uuidv4(),
    name: "Acer Swift 5 SF514 53T 720R/Core i7 8565U/NX.H7HSV.002",
    manufacture: "",
    category: "",
    price: 919,
    subPrice: 18,
    rating: 4,
    inCart: 0,
    stock: 5,
    image: "sp02.png",
    sellOff: 0,
    promos: [],
  },
  {
    id: uuidv4(),
    name: "Acer Swift 5 SF514 53T 720R/Core i7 8565U/NX.H7HSV.002",
    manufacture: "",
    category: "",
    price: 919,
    subPrice: 18,
    rating: 4,
    inCart: 0,
    stock: 5,
    image: "sp02.png",
    sellOff: 0,
    promos: [],
  }
]

var users = [
  {
    id: uuidv4(),
    name: "hieu",
    email: "h@h"
  },
  {
    id: uuidv4(),
    name: "thao",
    email: "t@t"
  }
]

var purchases = [
  {
    id: uuidv4(),
    name: "",
    quantity: "hieu",
    price: "",
    totalPrice: "",
  },
]
// var productIdAccumulator = products.length

app.listen(port, () => {
  console.log(`APP LISTENING at http://localhost:${port}`)
})
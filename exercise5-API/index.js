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
app.get('/products/search', (req, res) => {
  let { idProduct, name, manufacture, category, price } = req.query;
  idProduct = idProduct?.toLowerCase() || '';
  name = name?.toLowerCase() || '';
  manufacture = manufacture?.toLowerCase() || '';
  category = category?.toLowerCase() || '';
  price = price?.toLowerCase() || ''
  res.json(data.products.filter(p => {
    return p.name.toLowerCase().includes(name)
    && p.manufacture.toLowerCase().includes(manufacture)
    && p.category.toLowerCase().includes(category)
    && String(p.price).toLowerCase().includes(price)
    && String(p.idProduct).toLowerCase().includes(idProduct)
  }));
});

// NOTE: Ở dưới để tránh bị nhầm khi nhập :id và search.
// Còn cách khác để tránh nhầm link, mà quên rồi 
app.get('/products/:id', (req, res) => {
  let {id} = req.params  // NOTE: luôn là string
  const resultDb = data.products.find(p => p.idProduct == id)
  if (resultDb){
    res.json(resultDb);
  } else {
    res.send(`No such product with id: ${id}`);
  }
})
app.post('/products', (req, res) => {
  console.log(req.body)
  data.products.push({
    idProduct: uuidv4(),
    name: req.body.name,
    manufacture: req.body.manufacture,
    category: req.body.category,
    price: req.body.price,
  })
  res.send('Posted')
})
app.delete('/products/:id', (req, res) => {
  const resultIndex = data.products.findIndex(p => p.idProduct == req.params.id)
  if(resultIndex !== -1) {
    data.products.splice(resultIndex, 1)
    res.send('Deleted success')
  }
  else {
    res.send('No such product found')
  }
})
app.put('/products/:id', (req, res) => {  // http://localhost:4000/products/1?name=DELL !!!
  detect(req.body)
  // let { id } = req.params;  // ko để tên idProduct dc !!! >>>
  let idProduct = req.params.id;
  let { name, manufacture, category, price } = req.body
  const resultIndex = data.products.findIndex(p => p.idProduct == idProduct)
  if(resultIndex !== -1) {
    // data.products[resultIndex] = { id, name, manufacture, category, price }  // >>> bị sai key
    data.products[resultIndex] = { idProduct, name, manufacture, category, price }
    res.send('Updated success')
  }
  else {
    res.send('No such product found')
  }
})

// // USERS ------------------------------------
// app.get('/users', (req, res) => {
//   res.json(users)
// })
// app.get('/users/:id', (req, res) => {
//   console.log(req.params)
//   let {id} = req.params
//   const resultDb = users.find(u => u.idUser == id)
//   if (resultDb){
//     res.json(resultDb);
//   } else {
//     res.send(`No such user with id: ${id}`);
//   }
// })
// app.post('/users', (req, res) => {
//   console.log(req.body)
//   users.push({
//     idUser: uuidv4(),
//     username: req.body.username,
//     mail: req.body.mail,  // NOTE: ko nên đặt tên biến là email
//   })
//   // const { username, mail } = req.body;
//   // users.push({ id: uuidv4(), username, mail });
//   res.send('Posted')
// })
// 
//  PURCHASE ------------------------------------
// app.get('/purchases', (req, res) => {
//   res.json(purchases)
// })
// app.get('/purchases/search', (req, res) => {
//   let { idPurchase, idUser } = req.query;
//   idPurchase = idPurchase?.toLowerCase() || '';
//   idUser = idUser?.toLowerCase() || '';
//   res.json(purchases.filter(p => {
//     return String(p.idPurchase).toLowerCase().includes(idPurchase)
//     && String(p.idUser).toLowerCase().includes(idUser)
//   }));
// });
// app.get('/purchases/:id', (req, res) => {
//   console.log(req.params)
//   let {id} = req.params
//   const resultDb = purchases.find(p => p.idPurchase == id)
//   if (resultDb){
//     res.json(resultDb);
//   } else {
//     res.send(`No such purchase with id: ${id}`);
//   }
// })
// app.post('/purchases', (req, res) => {
//   console.log(req.body)
//   let { idUser, productsPurchase } = req.body  // let hay const !!!
//   let total = 0
//   for (pp of productsPurchase) {
//     let { idProduct, qty} = pp // let hay const !!!
//     const price = products.find(p => p.idProduct === idProduct).price
//     total += price * qty
//   }
//   purchases.push({ idPurchase: uuidv4(), idUser, productsPurchase, total })
//   res.send('Posted')
//   // nếu sản phẩm đã trùng idProduct !!!
// })
// app.delete('/purchases/:id', (req, res) => {
//   const resultIndex = purchases.findIndex(p => p.idPurchase == req.params.id)
//   if(resultIndex !== -1) {
//     purchases.splice(resultIndex, 1)
//     res.send('Deleted success')
//     // res.sendStatus(200).end();
//   }
//   else {
//     res.send('No such purchase found')
//   }
// })
// app.put('/purchases/:id', (req, res) => {
//   // http://localhost:4000/purchases/bd700211-0fa5-49a1-a45d-a188088af6e6?name=DELL
//   detect(req.body)
//   let { id } = req.params;  // dùng idPurchase nhá !!!
//   let { idUser, productsPurchase } = req.body
//   const resultIndex = purchases.findIndex(p => p.idPurchase == id)
//   if(resultIndex !== -1) {
//     purchases[resultIndex] = { id, idUser, productsPurchase }
//     res.send('Updated success')
//   }
//   else {
//     res.send('No such purchase found')
//   }
//   // total ko update !!!
// })

function detect(object) {
  for (var k in object) {
    if (object[k]==''){
      object[k] = '';
    } else if (!isNaN(object[k])) {
        object[k] = Number(object[k]);
    } else if (typeof object === "object") {
        detect(object[k]);
    }
  }
}

app.listen(port, () => {
  console.log(`APP LISTENING at http://localhost:${port}`)
})
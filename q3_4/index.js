const express = require('express');
const path = require('path');
const app = express();

const controller = require('./productController');


app.set('view engine','ejs');
app.set('views', path.join(__dirname,'view'));


app.use('/css', express.static(path.join(__dirname,"css"))); 
app.use(express.urlencoded()); 


app.get('/',controller.home);
app.post('/addToCart',controller.productInfo);
app.get('/products', controller.products);
app.get('/shoppingCart', controller.shoppingCart);
app.get('/checkCart', controller.shoppingCartItems);
app.listen(9000);
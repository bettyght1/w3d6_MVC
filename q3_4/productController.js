const Product = require('./product');


exports.home = (req, res)=>{
   res.render('home');
};

exports.productInfo = (req, res)=>{   
    let name= req.body.name;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let product = new Product(name, price, quantity);
    product.save();
    res.redirect(303, '/products');
 };

 exports.shoppingCart = (req, res)=>{
    let name= req.body.name;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let product = new Product(name, price, quantity);
    product.save();
    res.redirect(303, '/checkCart');
 }

exports.products = (req,res) =>{
    res.render('product',{itemList: Product.getAll()});
}

module.exports.shoppingCartItems = (req,res) =>{
    res.render('cart',{shoppingCartList: Product.getAll()});
}
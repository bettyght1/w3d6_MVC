let products = []
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    save() {
        products.push(this);
    }
    static getAll() {
        return products;
    }
}

module.exports = Product;
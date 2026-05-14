"use strict";
function getProduct(id) {
    return {
        id: id,
        name: `Product ${id}`,
        price: id * 10
    };
}
const product = getProduct(1);
console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
//console.log(`Product ID: ${product.id}, Name: ${product.category}, Price: ${product.price}`);
function showProductDetails(name, price) {
    console.log(`ShowProductDetails() Product Name: ${name}, Price: ${price}`);
}
showProductDetails(product.name, product.price);
//showProductDetails(product.category, product.price);

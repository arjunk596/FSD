// JSON Object
let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 }
];

// Display all products
console.log("All Products:");
products.forEach(function (product) {
    console.log(product.name + " - Rs." + product.price);
});

// Filter function
function filterByPrice(minPrice) {
    let filtered = products.filter(function (product) {
        return product.price >= minPrice;
    });

    console.log("Filtered Products:");
    filtered.forEach(function (product) {
        console.log(product.name + " - Rs." + product.price);
    });
}

// Example
filterByPrice(1600);
import React from 'react'

const ProductList = () => {
    // Predefined list of products
    const initialProducts = [
        { id: 1, name: "iPhone 15", price: 799, category: "Electronics" },
        { id: 2, name: "MacBook Air", price: 999, category: "Electronics" },
        { id: 3, name: "Nike Air Max", price: 120, category: "Footwear" },
        { id: 4, name: "Coffee Maker", price: 45, category: "Appliances" },
        { id: 5, name: "Gaming Mouse", price: 60, category: "Electronics" },
        { id: 6, name: "Leather Wallet", price: 30, category: "Accessories" },
    ];

    const [searchTerm, setSearchTerm] = React.useState("");

    // Filter products dynamically based on search term (case-insensitive)
    const filteredProducts = initialProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Product Listing</h2>

            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <p><small>Category: {product.category}</small></p>
                        </div>
                    ))
                ) : (
                    <p>No products found matching "{searchTerm}"</p>
                )}
            </div>
        </div>
    )
}

export default ProductList

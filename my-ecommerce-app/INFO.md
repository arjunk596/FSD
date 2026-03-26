# 🛍️ E‑commerce App with Vite + React

A simple e‑commerce frontend built with Vite and React.  
It includes product listing, cart management, quantity control, and total calculation.

## Features

- Display products from a static list.
- Add products to cart with custom quantity.
- Cart view with item quantities, subtotals, and total.
- Update or remove items from the cart.
- Clear cart and checkout simulation.

## Project Structure
- src/
- ├── components/
- │ ├── Header.jsx // Displays shop name and cart item count
- │ ├── ProductList.jsx // Renders all product cards
- │ ├── ProductCard.jsx // Single product with quantity picker
- │ └── Cart.jsx // Cart list, quantity controls, total, actions
- ├── App.jsx // Main component managing state
- ├── main.jsx // Entry point
- └── index.css // Global styles


## How It Works (Workflow)

1. **App component** holds the central state `cartItems` and provides functions to modify it:
   - `addToCart` – adds a product with a quantity (merges duplicates).
   - `updateQuantity` – changes quantity of a cart item.
   - `removeItem` – removes an item by index.
   - `clearCart` – empties the cart.

2. **Header** receives `cartCount` (sum of all item quantities) via props and displays it.

3. **ProductList** maps over the product array and passes each product and the `addToCart` function to `ProductCard`.

4. **ProductCard** allows the user to select a quantity (1+) before adding. It calls `addToCart(product, quantity)` when the button is clicked.

5. **Cart** receives `cartItems` and the update functions. It renders each cart item with quantity buttons, a remove button, and calculates the total price. The total updates live as quantities change.

6. **Styling** is done with simple CSS to make the app look clean and responsive.

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install


## Next Improvements

Add product images.
Implement local storage persistence.
Use Redux or Context for state (optional).
Connect to a real backend API.
Add user authentication.
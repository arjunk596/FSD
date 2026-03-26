function Cart({ cartItems, updateQuantity, removeItem, clearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h3>Your Cart</h3>
        <p>Cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <ul>
        {cartItems.map((item, idx) => (
          <li key={idx}>
            <span>{item.name}</span>
            <span>₹{item.price}</span>
            <div className="cart-quantity">
              <button onClick={() => updateQuantity(idx, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(idx, item.quantity + 1)}>+</button>
            </div>
            <span>₹{item.price * item.quantity}</span>
            <button className="remove-btn" onClick={() => removeItem(idx)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Total: ₹{total}</strong>
      </div>
      <button onClick={clearCart} className="clear-btn">Clear Cart</button>
      <button className="checkout-btn" onClick={() => alert(`Proceed to checkout: ₹${total}`)}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
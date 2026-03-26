function Header({ cartCount }) {
  return (
    <header style={{ background: '#222', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <h2>My Shop</h2>
      <p>Cart Items: {cartCount}</p>
    </header>
  );
}

export default Header;
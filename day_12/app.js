
function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <svg width="40" height="25" viewBox="0 0 36 24">
            <rect width="36" height="24" rx="4" fill="#131921" />
            <path
              d="M6 14c3 3 9 3 18 0"
              stroke="#FF9900"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="logo-text">amazon</span>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search Amazon Clone..."
        />
        <div className="nav-links">
          <span>Hello, Sign in</span>
          <span>Cart 🛒</span>
        </div>
      </header>

      {/* Hero section */}
      <section className="hero">
        <h1>Welcome to Amazon Clone</h1>
        <p>Best deals and offers every day!</p>
      </section>

      {/* Product grid */}
      <section className="product-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="product-card" key={i}>
            <img
              src={`https://picsum.photos/seed/item${i}/300/300`}
              alt={`Product ${i + 1}`}
            />
            <h3>Product {i + 1}</h3>
            <p>$ {(Math.random() * 100 + 10).toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>

     
      <footer className="footer">© 2025 Amazon Clone Demo</footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

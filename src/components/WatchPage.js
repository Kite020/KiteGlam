import React, { useState } from 'react';
import './WatchPage.css';

const products = [
  { id: 131, name: 'Fastrack Quartz Pink Silicone Watch', price: '₹859', image: require('../img/Fastrack1.png'), category: 'Fastrack' },
  { id: 132, name: 'Fastrack Women Stainless Steel Bracelet Watch', price: '₹1722', image: require('../img/Fastrack2.png'), category: 'Fastrack' },
  { id: 133, name: 'Titan Lagan Pink Dial Metal Strap Watch ', price: '₹1705', image: require('../img/Titan1.png'), category: 'Titan' },
  { id: 134, name: 'Titan Pink Gold Analogue Watch', price: '₹7108', image: require('../img/Titan2.png'), category: 'Titan' },
  { id: 135, name: 'Rolex Pink Watch for Ladies', price: '₹2719', image: require('../img/Rolex1.png'), category: 'Rolex' },
  { id: 136, name: 'Rolex Daytona Platinum Watch', price: '₹54499', image: require('../img/Rolex2.png'), category: 'Rolex' },
  { id: 137, name: 'Casio Analog Quartz Strap Watch', price: '₹3695', image: require('../img/Casio1.png'), category: 'Casio' },
  { id: 138, name: 'Casio Enticer Analog Wrist Watch', price: '₹7456', image: require('../img/Casio2.png'), category: 'Casio' },
  { id: 139, name: 'Timex Fria Round Analog Watch', price: '₹3083', image: require('../img/Timex1.png'), category: 'Timex' },
  { id: 140, name: 'Timex Celestial Analog Watch', price: '₹4721', image: require('../img/Timex2.png'), category: 'Timex' },
  { id: 141, name: 'Sonata Analog Dial Mesh Strap Watch', price: '₹1322', image: require('../img/Sonata1.png'), category: 'Sonata' },
  { id: 142, name: 'Sonata POZE DROP 4 Analog Watch', price: '₹1494', image: require('../img/Sonata2.png'), category: 'Sonata' },
  { id: 143, name: 'Fossil Women Riley Multifunction Watch', price: '₹6748', image: require('../img/Fossil1.png'), category: 'Fossil' },
  { id: 144, name: 'Women Fossil Gold Watch Ring', price: '₹11995', image: require('../img/Fossil2.png'), category: 'Fossil' },
];
// Helper to convert ₹ string to number
const extractPrice = (priceStr) => parseInt(priceStr.replace(/[₹,]/g, ''));



const WatchPage = ({ wishlist, setWishlist, cart, setCart}) => {
  const[selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Default');
  // Toggle wishlist heart state
  const toggleWishlist = (product) => {
    const isWished = wishlist.some((item) => item.id === product.id);
    if (isWished) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // Toggle cart state
  const handleAddToCart = (product) => {
    const alreadyInCart = cart.some((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCart([...cart, product]);
    }
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'Price: Low to High') {
      return extractPrice(a.price) - extractPrice(b.price);
    } else if (sortOption === 'Price: High to Low') {
      return extractPrice(b.price) - extractPrice(a.price);
    }
    return 0; // Default case
  });
  return (
    <div className="watch-page">
      

      {/* Hero Section */}
      <div className="watch-hero">
        <h2>⌚ Welcome to Timeless & True ⌚</h2>
        <p>
          Step into the world of <strong>grace 🕊️</strong>, <strong>precision ⏱️</strong>, and <strong>style ⌚</strong>.
          <br />
          Every moment counts — make yours stunning ✨
        </p>


      </div>

      {/* Filters and Sort */}
      <div className="watch-header container">
        <h3 className="section-title">Timeless & True</h3>
        <div className="filters-sort">
          <div className="filters">
            {['All', 'Fastrack', 'Titan', 'Rolex', 'Casio', 'Timex', 'Sonata', 'Fossil'].map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="sort">
            <label>Sort by:</label>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="product-grid container">
        {sortedProducts.map((product) => {
          const isWished = wishlist.some((item) => item.id === product.id);
          return (
            <div className="product-card" key={product.id} style={{ height: '400px' }}>
              <img src={product.image} alt={product.name} />
              <h5>{product.name}</h5>
              <p>{product.price}</p>
              <span
                className="wishlist"
                onClick={() => toggleWishlist(product)}
                style={{ cursor: 'pointer' }}
              >
                {isWished ? '❤' : '♡'}
              </span>
              {/* Add to Cart Button */}
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default WatchPage;

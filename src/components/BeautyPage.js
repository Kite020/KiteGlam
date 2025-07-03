import React, { useState } from 'react';
import './BeautyPage.css';

const products = [
  {id: 1, name: 'Derma Co Skincare Combo', price: '₹1899', image: require('../img/derma.png'), category: 'Skincare'},
  {id: 2, name: 'Rare Beauty Blush', price: '₹1999', image: require('../img/blush.png'), category: 'Makeup'},
  {id: 3, name: 'Wearified Makeup Brushes', price: '₹2699', image: require('../img/brushes.png'), category: 'Brushes'},
  {id: 4, name: 'Kimirica Skincare Combo', price: '₹2549', image: require('../img/kimirica.png'), category: 'Skincare'},
  {id: 5, name: 'Elf Primer', price: '₹699', image: require('../img/primer.png'), category: 'Makeup'},
];

// Helper to convert ₹ string to number
const extractPrice = (priceStr) => parseInt(priceStr.replace(/[₹,]/g, ''));

const BeautyPage = ({ wishlist, setWishlist, cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  // Filter based on category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Sort based on price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'Price: Low to High') {
      return extractPrice(a.price) - extractPrice(b.price);
    } else if (sortOption === 'Price: High to Low') {
      return extractPrice(b.price) - extractPrice(a.price);
    }
    return 0;
  });

  return (
    <div className="beauty-page">
      {/* Hero Banner */}
      <div className="beauty-hero">
        <h2>✨ Welcome to Blush & Bloom ✨</h2>
        <p>
          Explore the world of <strong>beauty 💄</strong>, <strong>glow ✨</strong>, and <strong>glam 🌸</strong>.
          <br />
          Your self-care journey starts here 💖
        </p>
      </div>

      {/* Category Filters & Sort */}
      <div className="beauty-header container">
        <h3 className="section-title">Blush & Bloom</h3>
        <div className="filters-sort">
          <div className="filters">
            {['All', 'Skincare', 'Makeup', 'Brushes'].map((cat) => (
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

export default BeautyPage;

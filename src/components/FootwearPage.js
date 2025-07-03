import React, { useState } from 'react';
import './WomenPage.css';

const products = [
  { id: 101, name: 'Puma Women Black Fluido Sneakers', price: '₹1899', image: require('../img/PumaSneakers1.png'), category: 'Sneakers' },
  { id: 102, name: 'Puma Women White Astralis Sneakers', price: '₹1899', image: require('../img/PumaSneakers2.png'), category: 'Sneakers' },
  { id: 103, name: 'Ginger White Platform Sandals ', price: '₹1999', image: require('../img/Sandals1.png'), category: 'Sandals' },
  { id: 104, name: 'Mosac Stylish Wedge Sandals ', price: '₹1999', image: require('../img/Sandals2.png'), category: 'Sandals' },
  { id: 105, name: 'Gokik Customized Peach Clogs', price: '₹2699', image: require('../img/Crocs1.png'), category: 'Crocs' },
  { id: 106, name: 'Women Self Design Purple Crocs', price: '₹2699', image: require('../img/Crocs2.png'), category: 'Crocs' },
  { id: 107, name: 'Marc Loire Women Black Block Heels', price: '₹2549', image: require('../img/Heels1.png'), category: 'Heels' },
  { id: 108, name: 'Elle Women White Heels', price: '₹2549', image: require('../img/Heels2.png'), category: 'Heels' },
  { id: 109, name: 'SSS Black Long Boots', price: '₹699', image: require('../img/Boots1.png'), category: 'Boots' },
  { id: 110, name: 'Ginger Women Matte Black Boots', price: '₹699', image: require('../img/Boots2.png'), category: 'Boots' },
  { id: 111, name: 'IYKYK Black Pointed Toe Flats', price: '₹699', image: require('../img/Flats1.png'), category: 'Flats' },
  { id: 112, name: 'Tryfeet Floral Printed Flats', price: '₹699', image: require('../img/Flats2.png'), category: 'Flats' },
  { id: 113, name: 'Yoho Pink Flip-Flops', price: '₹699', image: require('../img/Slippers1.png'), category: 'Slippers' },
  { id: 114, name: 'Cute Ribboned Black Slippers  ', price: '₹699', image: require('../img/Slippers2.png'), category: 'Slippers' },
];
// Helper to convert ₹ string to number
const extractPrice = (priceStr) => parseInt(priceStr.replace(/[₹,]/g, ''));



const WomenPage = ({ wishlist, setWishlist, cart, setCart}) => {
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
    <div className="women-page">
      

      {/* Hero Section */}
      <div className="women-hero">
        <h2>💃 Welcome to Grace & Glam 💃</h2>
            <p>
            Step into the world of <strong>elegance 👠</strong>, <strong>confidence 💄</strong>, and <strong>radiance 👑</strong>.
            <br />
            Your beauty and style journey begins here ✨
            </p>

      </div>

      {/* Filters and Sort */}
      <div className="women-header container">
        <h3 className="section-title">Bold & Dapper</h3>
        <div className="filters-sort">
          <div className="filters">
            {['All', 'Sneakers', 'Sandals', 'Crocs', 'Heels', 'Boots', 'Flats', 'Slippers'].map((cat) => (
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


export default WomenPage;

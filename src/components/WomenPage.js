import React, { useState } from 'react';
import './WomenPage.css';

const products = [
  { id: 61, name: 'Berryblush Women White Maxi-Dress', price: '₹1899', image: require('../img/BerryblushWomenWhiteMaxidress.png'), category: 'Maxi-Dress' },
  { id: 62, name: 'RSVP Women Black Midi-Dress', price: '₹1999', image: require('../img/RSVPWomenBlackMididress.png'), category: 'Midi-Dress' },
  { id: 63, name: 'Tivante Women Black Mini-Dress', price: '₹2699', image: require('../img/TivanteWomenBlackMinidress.png'), category: 'Mini-Dress' },
  { id: 64, name: 'Tokyo Talkies Women Designer Co-ords Set', price: '₹2549', image: require('../img/TokyoWomenDesignerCoord.png'), category: 'Co-ords' },
  { id: 65, name: 'Magenta Women Ethnic Dress', price: '₹699', image: require('../img/MagentaWomenEthnicdress.png'), category: 'Ethnic-Dress' },
  { id: 66, name: 'Rain&Rainbow Women Printed Kurti', price: '₹699', image: require('../img/RainWomenPrintedKurti.png'), category: 'Kurtis' },
  { id: 67, name: 'Corsica Women Maroon Top', price: '₹699', image: require('../img/CorsicaWomenMaroonTops.png'), category: 'Tops' },
  { id: 68, name: 'Kraus Women Brown Highrise Pants', price: '₹699', image: require('../img/KrausWomenBrownHighrisePant.png'), category: 'Pants' },
  { id: 69, name: 'Yashika Women Designer Pink Saree', price: '₹699', image: require('../img/YashikaWomenSaree.png'), category: 'Saree' },



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
            {['All', 'Maxi-Dress', 'Midi-Dress', 'Mini-Dress', 'Co-ords', 'Ethnic-Dress', 'Kurtis', 'Tops', 'Pants', 'Saree'].map((cat) => (
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

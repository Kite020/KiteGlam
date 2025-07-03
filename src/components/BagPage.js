import React, { useState } from 'react';
import './BagPage.css';

const products = [
  { id: 161, name: 'H&M Ladies Beige Tote Bag', price: '₹1399', image: require('../img/Tote1.png'), category: 'Tote Bags' },
  { id: 162, name: 'Vah Heusen Oversized Shoulder Bag', price: '₹1497', image: require('../img/Tote2.png'), category: 'Tote Bags' },
  { id: 163, name: 'MICHAEL KORS Zip-Around Wristlet', price: '₹10500', image: require('../img/Clutch1.png'), category: 'Clutches' },
  { id: 164, name: 'JIMMY CHOO Xandra Latte Clutch Bag', price: '₹91000', image: require('../img/Clutch2.png'), category: 'Clutches' },
  { id: 165, name: 'Women Pleatz25 frame clutch', price: '₹2100', image: require('../img/Clutch3.png'), category: 'Clutches' },
  { id: 166, name: 'Storite Printed Foldable Duffel Bag', price: '₹999', image: require('../img/Duffel1.png'), category: 'Duffel Bags' },
  { id: 167, name: 'Bella Crossbody Bag', price: '₹2449', image: require('../img/Hand1.png'), category: 'Hand Bags' },
  { id: 168, name: 'EXOTIC Studded Pink Hand Bag', price: '₹1249', image: require('../img/Hand2.png'), category: 'Hand Bags' },
  { id: 169, name: 'Allen Solly Women Sling Red Purse', price: '₹699', image: require('../img/Purse1.png'), category: 'Purses' },
  { id: 170, name: 'EXOTIC Studded Green Hand Bag', price: '₹699', image: require('../img/Purse2.png'), category: 'Purses' },
  { id: 171, name: 'Adidas Unisex Purple Backpack', price: '₹1697', image: require('../img/Backpack1.png'), category: 'Backpacks' },
  { id: 172, name: 'Savana White Floral Bag', price: '₹693', image: require('../img/Backpack2.png'), category: 'Backpacks' },
];
// Helper to convert ₹ string to number
const extractPrice = (priceStr) => parseInt(priceStr.replace(/[₹,]/g, ''));



const BagPage = ({ wishlist, setWishlist, cart, setCart}) => {
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
    <div className="bag-page">
      

      {/* Hero Section */}
      <div className="bag-hero">
        <h2>💃 Welcome to Grace & Glam 💃</h2>
            <p>
            Step into the world of <strong>elegance 👠</strong>, <strong>confidence 💄</strong>, and <strong>radiance 👑</strong>.
            <br />
            Your beauty and style journey begins here ✨
            </p>

      </div>

      {/* Filters and Sort */}
      <div className="bag-header container">
        <h3 className="section-title">Bold & Dapper</h3>
        <div className="filters-sort">
          <div className="filters">
            {['All', 'Tote Bags', 'Clutches', 'Duffel Bags', 'Hand Bags', 'Purses', 'Backpacks'].map((cat) => (
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


export default BagPage;

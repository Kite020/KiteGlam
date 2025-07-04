import React, { useState } from 'react';
import './JewelPage.css';

const products = [
  { id: 21, name: 'Diamond Pendant with Gold Texture', price: '₹1899', image: require('../img/DiamondPendent1.png'), category: 'Pendants'},
  { id: 22, name: 'Butterfly Designed Diamond Pendant', price: '₹1899', image: require('../img/DiamondButterflyPendent1.png'), category: 'Pendants'},
  { id: 23, name: 'Butterfly Designed Gold-Diamond Pendant ', price: '₹1899', image: require('../img/DiamondButterflyPendant.png'), category: 'Pendants'},
  { id: 24, name: 'Rose Gold PLated Floral Pendant', price: '₹1899', image: require('../img/RosegoldPendant.png'), category: 'Pendants'},
  { id: 25, name: 'Pearl Ear Rings Pink Flower Design', price: '₹1999', image: require('../img/PearlEarrings1.png'), category: 'Ear Rings' },
  { id: 26, name: 'Diamond Ear Rings with Gold Texture', price: '₹1999', image: require('../img/DiamondEarrings1.png'), category: 'Ear Rings' },
  { id: 27, name: 'Butterfly Designed Diamond Ear Rings', price: '₹1999', image: require('../img/DiamondButterflyEarrings1.png'), category: 'Ear Rings' },
  { id: 28, name: 'Rose Gold Floral Design Necklace', price: '₹2699', image: require('../img/RosegoldNecklace.png'), category: 'Necklaces' },
  { id: 29, name: 'Gemstones Party Necklace', price: '₹2699', image: require('../img/GemstoneNecklace.png'), category: 'Necklaces' },
  { id: 30, name: 'Silver Trilogy Love Ring', price: '₹2549', image: require('../img/SilverRing1.png'), category: 'Rings' },
  { id: 31, name: 'Rose Gold Amethyst Ring', price: '₹2549', image: require('../img/RosegoldRing1.png'), category: 'Rings' },
  { id: 32, name: '925 Sterling Silver Women Ring', price: '₹2549', image: require('../img/SilverRing2.png'), category: 'Rings' },
  { id: 33, name: 'Silver Zircon Ferns Bracelet', price: '₹699', image: require('../img/SilverBracelet1.png'), category: 'Bracelets' },
  { id: 34, name: 'Silver Infinity Love Bracelet', price: '₹699', image: require('../img/SilverBracelet2.png'), category: 'Bracelets' },
  { id: 35, name: 'Rose Gold Magnolia Flower Bracelet', price: '₹699', image: require('../img/RosegoldBracelet1.png'), category: 'Bracelets' },
  { id: 36, name: 'Twisted Infinity Diamond Bracelet', price: '₹699', image: require('../img/DiamondBracelet1.png'), category: 'Bracelets' },
  { id: 37, name: 'Trio Petals Nose Pin', price: '₹699', image: require('../img/GoldNosering1.png'), category: 'Nose Rings' },
  { id: 38, name: 'Silver Pink Gemstone Bangles', price: '₹699', image: require('../img/SilverBangles.png'), category: 'Bangles' },
  { id: 39, name: 'Pearl Green Gemstone Bangles', price: '₹699', image: require('../img/PearlBangles.png'), category: 'Bangles' },
  { id: 40, name: 'Silver Butterfly Anklets', price: '₹699', image: require('../img/SilverAnklets.png'), category: 'Anklets' },
  { id: 41, name: 'Gold Love Anklets', price: '₹699', image: require('../img/GoldAnklets.png'), category: 'Anklets' },


];
// Helper to convert ₹ string to number
const extractPrice = (priceStr) => parseInt(priceStr.replace(/[₹,]/g, ''));



const JewelPage = ({ wishlist, setWishlist, cart, setCart}) => {
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
    <div className="jewel-page">
      

      {/* Hero Section */}
      <div className="jewel-hero">
        <h2>💎 Welcome to Glitz & Grace 💎</h2>
        <p>
          Step into the world of <strong>elegance ✨</strong>, <strong>sparkle 💍</strong>, and <strong>timeless beauty 👑</strong>.
          <br />
          Your jewelry journey begins here ✨
        </p>


      </div>

      {/* Filters and Sort */}
      <div className="jewel-header container">
        <h3 className="section-title">Glitz & Grace</h3>
        <div className="filters-sort">
          <div className="filters">
            {['All', 'Pendants', 'Ear Rings', 'Rings', 'Necklaces', 'Bracelets', 'Nose Rings', 'Bangles', 'Anklets'].map((cat) => (
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


export default JewelPage;

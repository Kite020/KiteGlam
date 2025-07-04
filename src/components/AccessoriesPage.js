import React, { useState } from 'react';
import './AccessoriesPage.css';

const products = [
  { id: 181, name: 'H&M Ladies Wide-brim Straw Hat ', price: '₹2999', image: require('../img/Hat1.png'), category: 'Hats' },
  { id: 182, name: 'H&M Ladies Purple Floral Hat ', price: '₹599', image: require('../img/Hat2.png'), category: 'Hats' },
  { id: 183, name: 'AXTITUDE Women Winter French Ski Cap', price: '₹599', image: require('../img/Hat3.png'), category: 'Hats' },
  { id: 184, name: 'H&M Ladies Black Belt', price: '₹799', image: require('../img/Belt1.png'), category: 'Belts' },
  { id: 185, name: 'H&M Ladies Belt, Set of 3', price: '₹999', image: require('../img/Belt2.png'), category: 'Belts' },
  { id: 186, name: 'CHANEL COCO MADEMOISELLE Women Perfume', price: '₹12350', image: require('../img/Perfume1.png'), category: 'Perfumes' },
  { id: 187, name: 'YSL Mon Paris Women Perfume', price: '₹550', image: require('../img/Perfume2.png'), category: 'Perfumes' },
  { id: 188, name: 'Cherry Wine Women Perfume', price: '₹899', image: require('../img/Perfume3.png'), category: 'Perfumes' },
  { id: 189, name: 'Ladies Brown Pattern Sunglasses', price: '₹699', image: require('../img/Sunglass1.png'), category: 'Sunglasses' },
  { id: 190, name: 'Multicolor Satin Scrunchies', price: '₹86', image: require('../img/Scrunchy1.png'), category: 'Scrunchies' },
  { id: 191, name: 'Classic Satin Silk Scrunchies', price: '₹199', image: require('../img/Scrunchy2.png'), category: 'Scrunchies' },
  { id: 192, name: 'Anna Creations Korean Clips', price: '₹183', image: require('../img/Clip1.png'), category: 'Hair Clips' },
  { id: 193, name: 'Anna Creations Korean Flower Lock Pins', price: '₹173', image: require('../img/Clip2.png'), category: 'Hair Clips' },
  { id: 194, name: 'Pink Knotted Headband', price: '₹799', image: require('../img/Band1.png'), category: 'Headbands' },
  { id: 195, name: 'Long Pearl Flower Hair Ribbons', price: '₹238', image: require('../img/Band2.png'), category: 'Headbands' },
  { id: 196, name: 'Bakefy 6 Pcs Frosted Hair Claw Set', price: '₹299', image: require('../img/Clutcher1.png'), category: 'Clutchers' },
  { id: 197, name: '7-pack trainer socks for Women', price: '₹699', image: require('../img/Sock1.png'), category: 'Socks' },
  { id: 198, name: 'Women Flower Printed Microfiber Handkerchief', price: '₹215', image: require('../img/Hanky1.png'), category: 'Hankies' },
];
// Helper to convert ₹ string to number
const extractPrice = (priceStr) => parseInt(priceStr.replace(/[₹,]/g, ''));



const AccessPage = ({ wishlist, setWishlist, cart, setCart}) => {
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
    <div className="access-page">
      

      {/* Hero Section */}
      <div className="access-hero">
        <h2>🎀 Welcome to Spark & Style 🎀</h2>
        <p>
          Step into the world of <strong>charm 🌟</strong>, <strong>details 💫</strong>, and <strong>personality 🎯</strong>.
          <br />
          The perfect finishing touch starts here ✨
        </p>


      </div>

      {/* Filters and Sort */}
      <div className="access-header container">
        <h3 className="section-title">Spark & Style</h3>
        <div className="filters-sort">
          <div className="filters">
            {['All', 'Hats', 'Belts', 'Perfumes', 'Sunglasses', 'Scrunchies', 'Hair Clips', 'Headbands', 'Clutchers', 'Socks', 'Hankies'].map((cat) => (
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


export default AccessPage;

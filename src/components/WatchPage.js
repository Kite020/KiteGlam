import React, { useState } from 'react';
import './WatchPage.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useProducts
  from './useProducts';

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
      toast.info("❤️ removed from wishlist!");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("❤️ Added to wishlist!");
    }
  };
  
  const navigate = useNavigate();
  const firebaseProducts =
    useProducts();

  // Toggle cart state
  const handleAddToCart = (product) => {
    const alreadyInCart = cart.some((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);
      toast.success("🛒 Added to cart!");
    }
  };

  // Filter products based on selected category
  const womenProducts =
    firebaseProducts.filter(
      product => product.page === 'Watch'
    );

  const filteredProducts =
    selectedCategory === 'All'
      ? womenProducts
      : womenProducts.filter(
          product =>
            product.category === selectedCategory
        );
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
              <img
                src={product.image}
                alt={product.name}
                onClick={() =>
                  navigate(`/product/${product.id}`, {
                    state: { product }
                  })
                }
                style={{ cursor: 'pointer' }}
              />
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

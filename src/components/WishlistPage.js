import React from 'react';
import './WishlistPage.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const WishlistPage = ({ wishlist, setWishlist, cart, setCart }) => {

  const handleAddToCart = (product) => {
    const alreadyInCart = cart.some(item => item.id === product.id);
    if (!alreadyInCart) {
      setCart([...cart, product]);
      toast.success("🛒 Added to cart!");
    }
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
    toast.info("❤️ removed from wishlist!");
  };
  const navigate =
    useNavigate();

  return (
    <div className="wishlist-page">
      <div className="wishlist-hero">
        <h2>💖 My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="empty-msg">Your wishlist is empty 🥺</p>
        ) : (
          <div className="wishlist-grid container">
            {wishlist.map(product => (
              <div
              className="product-card"
              key={product.id}
              style={{ height: '400px' }}
            >
            
              <img
                src={product.image}
                alt={product.name}
            
                onClick={() =>
                  navigate(
                    `/product/${product.id}`
                  )
                }
            
                style={{
                  cursor: 'pointer'
                }}
              />
            
              <h5
                onClick={() =>
                  navigate(
                    `/product/${product.id}`,
                    {
                      state: {
                        product
                      }
                    }
                  )
                }
            
                style={{
                  cursor: 'pointer'
                }}
              >
                {product.name}
              </h5>
            
              <p>
                {product.price}
              </p>
            
              <span
                className="wishlist filled"
                onClick={() =>
                  handleRemoveFromWishlist(
                    product.id
                  )
                }
              >
                ❤
              </span>
            
              {/* ✅ Add to Cart Button */}
              <button
                className="add-to-cart-btn"
                onClick={() =>
                  handleAddToCart(product)
                }
              >
                Add to Cart
              </button>
            
            </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;

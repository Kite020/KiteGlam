import React from 'react';
import './WishlistPage.css';

const WishlistPage = ({ wishlist, setWishlist, cart, setCart }) => {

  const handleAddToCart = (product) => {
    const alreadyInCart = cart.some(item => item.id === product.id);
    if (!alreadyInCart) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-hero">
        <h2>💖 My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="empty-msg">Your wishlist is empty 🥺</p>
        ) : (
          <div className="wishlist-grid container">
            {wishlist.map(product => (
              <div className="product-card" key={product.id} style={{ height: '400px' }}>
                <img src={product.image} alt={product.name} />
                <h5>{product.name}</h5>
                <p>{product.price}</p>

                <span
                  className="wishlist filled"
                  onClick={() => handleRemoveFromWishlist(product.id)}
                >
                  ❤
                </span>

                {/* ✅ Add to Cart Button */}
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
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

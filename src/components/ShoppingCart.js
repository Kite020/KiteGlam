import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';
import { db, auth } from './Firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';


const extractPrice = (priceStr) => parseInt(priceStr.replace(/[₹,]/g, ''));

const ShoppingCart = ({ cart, setCart, wishlist, setWishlist }) => {
  const totalPrice = cart.reduce(
    (sum, item) =>
      sum +
      extractPrice(item.price) *
        (item.quantity || 1),
    0
  );
  const navigate = useNavigate();
  const toggleWishlist = (product) => {

    const isWished = wishlist.some(
      (item) => item.id === product.id
    );
  
    if (isWished) {
  
      setWishlist(
        wishlist.filter((item) => item.id !== product.id)
      );
  
      toast.info("💔 Removed from wishlist!");
  
    } else {
  
      setWishlist([...wishlist, product]);
  
      toast.success("❤️ Added to wishlist!");
    }
  };

  const increaseQuantity =
  (productId) => {

    setCart(
      cart.map(item => {

        if (
          item.id === productId
        ) {

          const currentQuantity =
            item.quantity || 1;

          const availableStock =
            item.stock || 0;

          // Prevent exceeding stock
          if (
            currentQuantity >=
            availableStock
          ) {

            toast.error(
              `Only ${availableStock} item(s) available in stock.`
            );

            return item;
          }

          return {

            ...item,

            quantity:
              currentQuantity + 1
          };
        }

        return item;
      })
    );
  };
  
  const decreaseQuantity = (id) => {

    const targetItem = cart.find(
      item => item.id === id
    );
  
    // ✅ If quantity becomes 0
    if ((targetItem.quantity || 1) === 1) {
  
      toast.info("🗑️ Removed from cart!");
  
    }
  
    setCart(
      cart
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantity:
                  (item.quantity || 1) - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <div className="shopping-cart">
      <div className="shopping-hero">
        <h2>💖 My shopping cart</h2>
        {cart.length === 0 ? (
          <p className="empty-msg">Your shopping cart is empty 🥺</p>
        ) : (
          <div className="shopping-grid container">
            {cart.map(product => (
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
            
              <div className="quantity-controls">
            
                <button
                  onClick={() =>
                    decreaseQuantity(
                      product.id
                    )
                  }
                >
                  −
                </button>
            
                <span>
                  {product.quantity || 1}
                </span>
            
                <button
                  onClick={() =>
                    increaseQuantity(
                      product.id
                    )
                  }
                >
                  +
                </button>
            
              </div>
            
              <p className="subtotal">
            
                Subtotal:
                ₹
            
                {
                  extractPrice(
                    product.price
                  ) *
            
                  (product.quantity || 1)
                }
            
              </p>
            
              <div className="card-icons">
            
                {/* Wishlist Heart */}
                <span
                  className="wishlist"
            
                  onClick={() =>
                    toggleWishlist(product)
                  }
            
                  style={{
                    cursor: 'pointer'
                  }}
                >
            
                  {wishlist.some(
                    (item) =>
                      item.id === product.id
                  )
                    ? '❤'
                    : '♡'}
            
                </span>
            
                {/* Remove from cart */}
                <span
                  className="shopping filled"
            
                  onClick={() => {
            
                    setCart(
                      cart.filter(
                        item =>
                          item.id !== product.id
                      )
                    );
            
                    toast.info(
                      '🗑️ Removed from cart!'
                    );
                  }}
            
                  style={{
                    cursor: 'pointer'
                  }}
                >
                  🗑️
                </span>
            
              </div>
            
            </div>
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="purchase-summary-box">
          <h4>Total Price: ₹{totalPrice}</h4>
          <button
            className="purchase-button"
            onClick={() =>
              navigate('/checkout')
            }
          >
            Proceed to Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

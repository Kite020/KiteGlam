import React, { useState } from 'react';
import './ShoppingCart.css';
import { db, auth } from './Firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const extractPrice = (priceStr) => parseInt(priceStr.replace(/[₹,]/g, ''));

const ShoppingCart = ({ cart, setCart }) => {
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const totalPrice = cart.reduce((sum, item) => sum + extractPrice(item.price), 0);

  const handlePurchase = async () => {
    const user = auth.currentUser;
    if (!user || cart.length === 0) return;

    try {
      await addDoc(collection(db, 'orders'), {
        userId: user.uid,
        items: cart.map(({ id, name, price }) => ({ id, name, price })),
        createdAt: Timestamp.now()
      });

      setPurchaseSuccess(true);
      setTimeout(() => {
        setPurchaseSuccess(false);
        setCart([]);
      }, 2000);
    } catch (error) {
      console.error('Error saving order:', error);
      alert('Purchase failed. Please try again.');
    }
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
              <div className="product-card" key={product.id} style={{ height: '400px' }}>
                <img src={product.image} alt={product.name} />
                <h5>{product.name}</h5>
                <p>{product.price}</p>
                <span
                  className="shopping filled"
                  onClick={() =>
                    setCart(cart.filter(item => item.id !== product.id))
                  }
                >
                  ❤
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="purchase-summary-box">
          <h4>Total Price: ₹{totalPrice}</h4>
          <button className="purchase-button" onClick={handlePurchase}>
            Proceed to Purchase
          </button>
          {purchaseSuccess && (
            <p className="purchase-success-msg">🎉 Purchase made successfully!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

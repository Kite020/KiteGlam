import React from 'react';
import './ShoppingCart.css';

const extractPrice = (priceStr) => parseInt(priceStr.replace(/[₹,]/g, ''));

const ShoppingCart = ({ cart, setCart }) => {
  const [purchaseSuccess, setPurchaseSuccess] = React.useState(false);
  const totalPrice = cart.reduce((sum, item) => sum + extractPrice(item.price), 0);
  const handlePurchase = () => {
    setPurchaseSuccess(true);
    setTimeout(() => {
      setPurchaseSuccess(false);
      setCart([]);
    }, 2000);
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

      
import React, { useState } from 'react';

import './CheckoutPage.css';

import {
  db,
  auth
} from './Firebase';

import {
  collection,
  addDoc,
  Timestamp,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

const extractPrice = (priceStr) =>
  parseInt(
    priceStr.replace(/[₹,]/g, '')
  );

const CheckoutPage = ({
  cart,
  setCart
}) => {

  const navigate = useNavigate();

  const [address, setAddress] =
    useState('');

  const [paymentMethod, setPaymentMethod] =
    useState('Cash on Delivery');

  const [coupon, setCoupon] =
    useState('');
  
  const [discount, setDiscount] =
    useState(0);

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum +
      extractPrice(item.price) *
        (item.quantity || 1),
    0
  );

  const handleApplyCoupon = () => {

    const upperCoupon =
      coupon.toUpperCase();
  
    if (upperCoupon === 'GLAM10') {
  
      setDiscount(totalPrice * 0.1);
  
      toast.success(
        "🎉 GLAM10 Applied!"
      );
  
    } else if (
      upperCoupon === 'WELCOME20'
    ) {
  
      setDiscount(totalPrice * 0.2);
  
      toast.success(
        "🎉 WELCOME20 Applied!"
      );
  
    } else {
  
      setDiscount(0);
  
      toast.error(
        "❌ Invalid Coupon"
      );
    }
  };
  const finalTotal =
  totalPrice - discount;

  const handlePlaceOrder = async () => {

    try {

      if (!auth.currentUser) {

        toast.error(
          "Please login first."
        );

        return;
      }

      if (!address.trim()) {

        toast.error(
          "Please enter delivery address."
        );

        return;
      }

      await addDoc(
        collection(db, 'orders'),
        {

          userId:
            auth.currentUser.uid,

          items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity:
              item.quantity || 1
          })),

          address,

          paymentMethod,

          totalPrice: finalTotal,

          createdAt:
            Timestamp.now(),

          status: 'Placed'
        }
      );
      for (const item of cart) {

        const productRef =
          doc(
            db,
            'products',
            item.id
          );
      
        const productSnap =
          await getDoc(productRef);
      
        if (productSnap.exists()) {
      
          const currentStock =
            productSnap.data().stock || 0;
      
          await updateDoc(
            productRef,
            {
              stock:
                Math.max(
                  currentStock -
                    (item.quantity || 1),
                  0
                )
            }
          );
        }
      }

      toast.success(
        "🎉 Order placed successfully!"
      );

      setCart([]);

      setTimeout(() => {

        navigate('/profile');

      }, 2000);

    } catch (error) {

      console.error(
        "ORDER ERROR:",
        error
      );

      toast.error(
        "❌ Failed to place order."
      );
    }
  };

  return (

    <div className="checkout-page">

      <div className="checkout-card">

        <h2>🛍️ Checkout</h2>

        <textarea
          placeholder="Enter delivery address..."
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />

        <select
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(
              e.target.value
            )
          }
        >
          <option>
            Cash on Delivery
          </option>

          <option>
            UPI
          </option>

          <option>
            Debit Card
          </option>

          <option>
            Credit Card
          </option>
        </select>

        <div className="checkout-summary">

          <h3>Order Summary</h3>

          {cart.map(item => (

            <div
              key={item.id}
              className="checkout-item"
            >

              <p>
                {item.name}
              </p>

              <p>
                Qty:
                {item.quantity || 1}
              </p>

              <p>
                ₹
                {
                  extractPrice(
                    item.price
                  ) *
                  (item.quantity || 1)
                }
              </p>

            </div>
          ))}

          <h3>
            Total: ₹{totalPrice}
          </h3>
          <div className="coupon-section">

            <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) =>
                setCoupon(e.target.value)
                }
            />

            <button
                onClick={handleApplyCoupon}
            >
                Apply
            </button>

            </div>

            {discount > 0 && (

            <div className="discount-info">

                <p>
                Discount:
                -₹{discount.toFixed(0)}
                </p>

                <h3>
                Final Total:
                ₹{finalTotal.toFixed(0)}
                </h3>

            </div>
            )}

        </div>

        <button
          className="place-order-btn"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  );
};

export default CheckoutPage;
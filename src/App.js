import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/Firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ForgotPasswordPage from './components/ForgotPasswordPage'; // Import the Forgot Password component
import HomePage from './components/HomePage';
import BeautyPage from './components/BeautyPage';
import JewelPage from './components/JewelPage';
import WomenPage from './components/WomenPage';
import FootwearPage from './components/FootwearPage';
import WatchPage from './components/WatchPage';
import BagPage from './components/BagPage';
import AccessoriesPage from './components/AccessoriesPage';
import WishlistPage from './components/WishlistPage';
import ShoppingCart from './components/ShoppingCart';
import NavbarComponent from './components/Navbar';
import ProfilePage from './components/ProfilePage';
import EditProfilePage from './components/EditProfilePage'; // Import the new EditProfilePage component
import ProductDetailsPage from './components/ProductDetailsPage';
import CheckoutPage from './components/CheckoutPage';
import AdminDashboard from './components/AdminDashboard';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [wishlist, setWishlist] = React.useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
  
    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });
  
  const [cart, setCart] = React.useState(() => {
    const savedCart = localStorage.getItem('cart');
  
    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      'wishlist',
      JSON.stringify(wishlist)
    );
  }, [wishlist]);
  
  useEffect(() => {
    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );
  }, [cart]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  if (!authChecked) {
    return <div style={{ textAlign: 'center', marginTop: '3rem' }}>Checking authentication...</div>;
  }

  const PrivateRoute = () => {
    return user ? (
      <>
        <NavbarComponent />
        <Outlet />
      </>
    ) : (
      <Navigate to="/login" replace />
    );
  };

  return (
    <Router>
      <div className="App">
        <Routes> 
          {/* 🔐 Auth Pages */}
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/" />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* New Forgot Password Route */}

          {/* 🛡️ Protected Routes */}
          <Route path="/*" element={<PrivateRoute />}>
            <Route index element={<HomePage />} />
            <Route path="beauty" element={<BeautyPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
            <Route path="wishlist" element={<WishlistPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
            <Route path="jewel" element={<JewelPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
            <Route path="women" element={<WomenPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
            <Route path="footwear" element={<FootwearPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
            <Route path="watch" element={<WatchPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
            <Route path="bag" element={<BagPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
            <Route path="accessories" element={<AccessoriesPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
            <Route path="cart" element={<ShoppingCart cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="edit-profile" element={<EditProfilePage />} /> {/* New Edit Profile Route */}
            <Route
              path="product/:id"
              element={
                <ProductDetailsPage
                  cart={cart}
                  setCart={setCart}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                />
              }
            />
            <Route
              path="checkout"
              element={
                <CheckoutPage
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="admin"
              element={<AdminDashboard />}
            />
          </Route>

        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </Router>
  );
}

export default App;

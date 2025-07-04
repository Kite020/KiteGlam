import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/Firebase';

import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
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

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

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
            <Route path="cart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

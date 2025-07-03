import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import BeautyPage from './components/BeautyPage';
import JewelPage from './components/JewelPage';
import WomenPage from './components/WomenPage';
import FootwearPage from './components/FootwearPage';
import WatchPage from './components/WatchPage'; // ⬅️ Import the WatchPage here
import BagPage from './components/BagPage'; // ⬅️ Import the BagPage here
import AccessoriesPage from './components/AccessoriesPage';
import WishlistPage from './components/WishlistPage';
import ShoppingCart from './components/ShoppingCart';
import NavbarComponent from './components/Navbar'; // ⬅️ Import the Navbar here
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [wishlist, setWishlist] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  return (
    <Router>
      <div className="App">
        {/* ✅ Navbar will always be shown */}
        <NavbarComponent />

        {/* ✅ Pages rendered here based on route */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beauty" element={<BeautyPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
          <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
          <Route path="/jewel" element={<JewelPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>} />
          <Route path="/women" element={<WomenPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>} />
          <Route path="/footwear" element={<FootwearPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>} />
          <Route path="/watch" element={<WatchPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>} />
          <Route path="/bag" element={<BagPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>} />
          <Route path="/accessories" element={<AccessoriesPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>} />
          {/* Shopping Cart Route */}
          <Route path="/cart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

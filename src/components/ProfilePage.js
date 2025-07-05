import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser, signOut, onAuthStateChanged } from 'firebase/auth'; // ✅ Import added
import { FaTrash, FaHeart, FaSignOutAlt, FaBoxOpen, FaUserEdit } from 'react-icons/fa';
import { auth, db } from './Firebase';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  // ✅ Fix auth state detection
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (confirmed && user) {
      try {
        await deleteUser(user);
        alert('Account deleted successfully.');
        navigate('/login');
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('Failed to delete account. Please try again later.');
      }
    }
  };

  const handleGoToWishlist = () => {
    navigate('/wishlist');
  };

  const handleViewOrders = () => {
    setShowOrders(true);
  };

  // ✅ Live fetch user's past orders
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'orders'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const ordersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOrders(ordersData);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-left">
          <div className="profile-icon">
            <FaUserEdit size={64} />
          </div>
          <h2>{user?.displayName || 'User'}</h2>
          <p>{user?.email}</p>
          <button className="edit-btn" onClick={()=> navigate('/edit-profile')}>Edit Profile</button>
          <ul className="profile-options">
            <li onClick={handleViewOrders}><FaBoxOpen /> My Orders</li>
            <li onClick={handleGoToWishlist}><FaHeart /> Wishlist</li>
            <li onClick={handleLogout}><FaSignOutAlt /> Log Out</li>
            <li onClick={handleDeleteAccount} className="delete-account"><FaTrash /> Delete Account</li>
          </ul>
        </div>

        <div className="profile-right">
          <h2>👋 Welcome back, {user?.displayName?.split(' ')[0] || 'User'}!</h2>
          <p>We're glad to see you.</p>

          {/* ✅ Order History Section */}
          {showOrders && (
            <div className="order-history">
              <h3>📦 Order History</h3>
              {orders.length === 0 ? (
                <p>No previous orders found.</p>
              ) : (
                <ul className="order-list">
                  {orders.map(order => (
                    <li key={order.id} className="order-item">
                      <strong>🧾 Order:</strong>{' '}
                      {order.items.map(item => `${item.name} (${item.price})`).join(', ')}
                      <br />
                      <small>📅 Date: {order.createdAt?.toDate().toLocaleString()}</small>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

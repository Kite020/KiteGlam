import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser, signOut, onAuthStateChanged } from 'firebase/auth'; // ✅ Import added
import { FaTrash, FaHeart, FaSignOutAlt, FaBoxOpen, FaUserEdit } from 'react-icons/fa';
import { auth, db } from './Firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import './ProfilePage.css';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  // ✅ Fix auth state detection
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    toast.info("👋 Logged out!");
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.'
    );
  
    if (confirmed && user) {
      try {
  
        await deleteUser(user);
  
        // ✅ Success toast
        toast.success("🗑️ Account deleted successfully!");
  
        setTimeout(() => {
          navigate('/login');
        }, 2000);
  
      } catch (error) {
  
        console.error('Error deleting account:', error);
  
        // ❌ Error toast
        toast.error("❌ Failed to delete account.");
      }
    }
  };

  const handleGoToWishlist = () => {
    navigate('/wishlist');
    toast.info("❤️ Opening wishlist...");
  };

  const handleViewOrders = () => {
    setShowOrders(prev => !prev);
  };

  // ✅ Live fetch user's past orders
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'orders'),
      where('userId', '==', user.uid),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const ordersData = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .sort((a, b) => 
          b.createdAt?.seconds - a.createdAt?.seconds
        );
      setOrders(ordersData);
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
                <div className="order-list">

                  {orders.map(order => {

                    const orderTotal = order.items.reduce(
                      (sum, item) =>
                        sum +
                        (
                          parseInt(
                            item.price.replace(/[₹,]/g, '')
                          ) *
                          (item.quantity || 1)
                        ),
                      0
                    );

                    return (

                      <div
                        key={order.id}
                        className="order-item"
                      >

                        <h4>🧾 Order Summary</h4>

                        {order.items.map(item => (

                          <div
                            key={item.id}
                            className="order-product"
                          >

                            <p>
                              <strong>
                                {item.name}
                              </strong>
                            </p>

                            <p>
                              Price: {item.price}
                            </p>

                            <p>
                              Quantity:
                              {item.quantity || 1}
                            </p>

                            <p>
                              Subtotal: ₹
                              {
                                parseInt(
                                  item.price.replace(/[₹,]/g, '')
                                ) *
                                (item.quantity || 1)
                              }
                            </p>

                            <hr />

                          </div>
                        ))}

                        <h5>
                          Total Paid:
                          ₹
                          {
                            order.totalPrice ||
                            orderTotal
                          }
                        </h5>
                        <p>
                          <strong>
                            Payment Method:
                          </strong>
                          {' '}
                          {order.paymentMethod ||
                            'Cash on Delivery'}
                        </p>

                        <p>
                          <strong>
                            Delivery Address:
                          </strong>
                          {' '}
                          {order.address ||
                            'No address available'}
                        </p>
                        <p className="order-status">

                          <strong>
                            📦 Status:
                          </strong>

                          {' '}

                          {order.status || 'Placed'}

                        </p>

                        <small>
                          📅 Purchased on:
                          {' '}
                          {order.createdAt
                            ?.toDate()
                            .toLocaleString()}
                        </small>

                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

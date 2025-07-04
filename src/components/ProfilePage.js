import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from 'firebase/auth';
import { FaTrash } from 'react-icons/fa';
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';
import './ProfilePage.css';
import { FaHeart, FaSignOutAlt, FaBoxOpen, FaUserEdit } from 'react-icons/fa';

const ProfilePage = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (confirmed) {
      const user = auth.currentUser;
      if (user) {
        deleteUser(user)
          .then(() => {
            alert('Account deleted successfully.');
            navigate('/login');
          })
          .catch((error) => {
            console.error('Error deleting account:', error);
            alert('Failed to delete account. Please try again later.');
          });
      } else {
        alert('No user is currently logged in.');
      }
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-left">
          <div className="profile-icon">
            <FaUserEdit size={64} />
          </div>
          <h2>{user?.displayName || 'User'}</h2>
          <p>{user?.email}</p>
          <button className="edit-btn">Edit Profile</button>
          <ul className="profile-options">
            <li><FaBoxOpen /> My Orders</li>
            <li><FaHeart /> Wishlist</li>
            <li onClick={handleLogout}><FaSignOutAlt /> Log Out</li>
            <li onClick={handleDeleteAccount} className="delete-account"><FaTrash /> Delete Account</li>
          </ul>
        </div>

        <div className="profile-right">
          <h2>👋 Welcome back, {user?.displayName?.split(' ')[0] || 'User'}!</h2>
          <p>We're glad to see you.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

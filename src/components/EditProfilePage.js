import React, { useState } from 'react';
import { auth } from './Firebase';
import { updateProfile, updateEmail, updatePassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './EditProfilePage.css'; // Optional styling

const EditProfilePage = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSaveChanges = async () => {
    try {
      if (displayName !== user.displayName) {
        await updateProfile(user, { displayName });
      }

      if (email !== user.email) {
        await updateEmail(user, email);
      }

      if (password.trim()) {
        await updatePassword(user, password);
      }

      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
        navigate('/profile'); // back to profile
      }, 2000);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Try again.');
    }
  };

  return (
    <div className="edit-profile-container">
      <h2>📝 Edit Profile</h2>
      <label>Display Name:</label>
      <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
      
      <label>Email:</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <label>New Password:</label>
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSaveChanges}>Save Changes</button>
      
      {successMsg && <p className="success-msg">✅ Profile updated successfully!</p>}
    </div>
  );
};

export default EditProfilePage;

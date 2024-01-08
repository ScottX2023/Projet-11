import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../Redux/userProfile';
import { updateUserProfile } from '../Redux/updateUserProfile';
import { useNavigate } from 'react-router-dom';
import { updateUserName } from '../Redux/user';

const User = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, userName } = useSelector((state) => state.userData);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [editingUserName, setEditingUserName] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/signin');
    } else {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, navigate, token]);

  const handleEditName = () => {
    setEditingUserName(true);
  };

  const handleSave = async () => {
    try {
      await dispatch(updateUserProfile(userName));
      setEditingUserName(false);
    } catch (error) {
      console.error('Failed to update user profile:', error);
    }
  };

  const handleCancel = () => {
    setEditingUserName(false);
  };

  return (
    <main className="bg-dark main">
      <div className="header">
        {editingUserName ? (
          <div >
            <h1 className='header-title' >Edit User Info</h1>
            <div className='input-container'>
              <label>Username</label>
              <input
                id="usernameInput"
                type="text"
                value={userName}
                onChange={(e) => {
                  dispatch(updateUserName(e.target.value));
                }}
              />

              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                disabled
              />

              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                disabled
              />
            </div>
            <div className='btn-container'>
              <button className='edit-user-button' onClick={handleSave}>Save</button>
              <button className='edit-user-button' onClick={handleCancel}>Cancel</button>
            </div>  
          </div>
        ) : (
          <div>
            <h1 className='header-title' >Welcome back, {firstName} {lastName} !</h1>
            <button className="edit-button" onClick={handleEditName}>
              Edit Name
            </button>
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default User;

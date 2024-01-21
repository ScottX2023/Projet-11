import React from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../Redux/auth';
import { loginUser } from '../Redux/login';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
      const responseData = await dispatch(loginUser(email, password));
      console.log('responseData.token:', responseData.body.token);
      if (responseData && responseData.body.token) {
        dispatch(setToken(responseData.body.token));
        navigate('/user');
      } 
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;

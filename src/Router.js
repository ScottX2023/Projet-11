import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import User from './Pages/User';
import Error from './Pages/Error';
import Footer from './Components/Footer';
import Header from './Components/Header';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;

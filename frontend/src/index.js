import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import Home from './pages/Home/Home';
import AddBlog from './pages/AddBlog/AddBlog';
import MyBlogs from './pages/MyBlogs/MyBlogs';
import Profile from './pages/Profile/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/writeblog" element={<AddBlog />} />
        <Route path="/myblogs" element={<MyBlogs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

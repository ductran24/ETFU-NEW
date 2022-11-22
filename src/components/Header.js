import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/auth_context';

const Header = () => {
  const { role, logoutHandler } = useAuthContext();

  return (
    <header>
      <Link to="/" className="logo">
        <span style={{ color: '#2EB872' }}>Smart</span>
        <span>English</span>
      </Link>

      <div id="menu" className="fas fa-bars"></div>

      <nav className="navbar" style={{ display: 'flex' }}>
        <Link to="/">Home</Link>
        <Link to="/practice">Practice</Link>
        <div className="header-blog">
          <Link>Blog</Link>
          <ul className="blog-menu">
            <li className="blog-menu-list">
              <Link className="blog-link" style={{ margin: '0', color: '#ffffff' }} to="/blog-list">
                Blog List
              </Link>
            </li>
            <li className="blog-menu-list">
              <Link className="blog-link" style={{ margin: '0', color: '#ffffff' }} to="/post">
                Blog Post
              </Link>
            </li>
          </ul>
        </div>

        {role && <Link to="/exam">Exam</Link>}

        {role === 'admin' && <Link to="/admin/create-question">Admin</Link>}

        {role === 'user' && <Link to="/profile">Profile</Link>}

        {!role && (
          <Link to="/login" style={{ color: '#2EB872' }}>
            Login
          </Link>
        )}

        {role && (
          <Link to="/" style={{ color: '#2EB872' }} onClick={logoutHandler}>
            Logout
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

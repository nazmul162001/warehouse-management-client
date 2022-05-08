import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/craving-logo.png';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  //signOUt
  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth);
  };

  return (
    <div className="px-10 py-5 sticky top-0 z-50 bg-white">

      

      
      <nav className="flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-menu">
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to="/"
          >
            Home
          </NavLink>

          {user ? (
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              to="/manage"
            >
              Manage Items
            </NavLink>
          ) : (
            ''
          )}
          {user ? (
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              to="/additem"
            >
              Add Item
            </NavLink>
          ) : (
            ''
          )}
          {user ? (
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              to="/myitem"
            >
              My Items
            </NavLink>
          ) : (
            ''
          )}

          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to="/blogs"
          >
            Blogs
          </NavLink>
          {user ? (
            <NavLink
              onClick={handleLogOut}
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              to="/login"
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

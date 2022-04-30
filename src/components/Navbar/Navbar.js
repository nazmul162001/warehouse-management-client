import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.png';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [ user ] = useAuthState(auth)

  //signOUt
  const handleLogOut = (e) => {
    e.preventDefault()
    signOut(auth)
  }
  
  
  return (
    <nav className="flex justify-between items-center px-10 py-5 sticky top-0 z-50 bg-white">
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

        {
          user ?         <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/manage"
        >
          Manage Item
        </NavLink>
        :
        ''
        }
        {
          user ?         <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/additem"
        >
          Add Item
        </NavLink>
        :
        ''
        }
        {
          user ?         <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/myitem"
        >
          My Item
        </NavLink>
        :
        ''
        }
        
        
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/blogs"
        >
          Blogs
        </NavLink>
        {
          user
          ?
          <NavLink
            onClick={handleLogOut}
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/login"
        >
          Logout
        </NavLink>
          :
          <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/login"
        >
          Login
        </NavLink>}
      </div>
    </nav>
  );
};

export default Navbar;

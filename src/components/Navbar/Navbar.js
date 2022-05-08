import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/craving-logo.png';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import swal from 'sweetalert';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  

  //signOUt
  const handleLogOut = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "You want to logOut!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Successfully Logout", {
          icon: "success",
        });
        signOut(auth);
      } else {
        swal("I think You clicked by mistake!");
      }
    });
  };

  return (
    <div className="px-10 py-0 md:py-5 sticky top-0 z-50 bg-white">
      <div
        onClick={() => setOpen(!open)}
        className="humberger-menu w-10 h-10 absolute top-3 right-3 md:hidden z-50"
      >
        {open ? <XIcon /> : <MenuAlt1Icon />}
      </div>
      <nav
        className={`nav-container flex flex-col md:flex-row justify-start text-center md:justify-between bg-white
         md:items-center pt-16 md:pt-0 w-9/12 md:w-full h-screen md:h-16 absolute top-0 md:static duration-300 ease-in-out ${
            open ? 'left-0' : 'left-[-5000px]'
          }`}
      >
        <div className="logo mx-auto md:mx-0">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-menu flex flex-col md:flex-row">
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

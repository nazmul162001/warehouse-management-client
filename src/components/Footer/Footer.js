import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css'
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="h-96 mt-10">
        <div className="footer-header flex flex-col md:flex-row justify-center md:justify-between px-16 items-center mb-3 border-b-4 border-slate-400 py-3">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="social-icon flex justify-end items-center">
            <FaFacebook style={{backgroundColor: '#4267B2'}} className="m-2 text-5xl text-white cursor-pointer p-2 rounded-full" />
            <FaTwitterSquare style={{backgroundColor: '#1DA1F2'}} className="m-2 text-5xl text-white cursor-pointer p-2 rounded-full" />
            <FaInstagram style={{backgroundColor: '#E1306C'}} className="m-2 text-5xl text-white cursor-pointer p-2 rounded-full" />
            <FaLinkedin style={{backgroundColor: '#0077B5'}} className="m-2 text-5xl text-white cursor-pointer p-2 rounded-full" />
            <FaYoutube style={{backgroundColor: '#FC0000'}} className="m-2 text-5xl text-white cursor-pointer p-2 rounded-full" />
          </div>
        </div>
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center text-center">
          {/* Company  */}
          <div className="company my-2">
            <h2 className="company-title">Company</h2>
            <h3>Home</h3>
            <h3>Contact Us</h3>
            <h3>About Us</h3>
            <h3>Get Started</h3>
          </div>

          {/* service  */}
          <div className="services my-2">
            <h2>Services</h2>
            <h3>Deliver Organic Food</h3>
            <h3>On Time Delivery</h3>
            <h3>Home Delivery</h3>
            <h3>Customer Satisfaction</h3>
          </div>

          {/* Account  */}
          <div className="account my-2">
            <h2>Account</h2>
            <h3>Profile</h3>
            <h3>My Accound</h3>
            <h3>Preferrence</h3>
            <h3>Purchase</h3>
          </div>

          {/* subscribe  */}
          <div className="subscript text-center md:text-left my-2">
            <h2>Subscribe</h2>
            <input className='border-2 border-slate-400 rounded-full my-2 px-2' type="email" name="email" id="email" placeholder='Enter your email' />
            <br />
            <div className='button py-2 pl-3 text-white bg-slate-700 w-2/3 rounded-md cursor-pointer text-center mx-auto md:mx-0'>
              Subscribe
            </div>
          </div>
        </div>
        <div className="copyright flex flex-col md:flex-row my-3 items-center justify-between px-16 border-t-2 border-slate-300 py-5">
        <div className="copyright-text">
        <p>Copyright &copy;2022 <Link className='text-sky-500 italic' to='/'>Kraft Foods</Link> All right reserve</p>
        </div>
        <div className="terms">
        <p>Privacy policy Terms & condition</p>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Footer = () => {

  const handleJoin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    if(email){
      toast('Thank You For Joining Us')
      e.target.reset()
    }
  }
  
  
  return (
    <>
      <footer className="h-96 mt-10">
        <div className="footer-header flex flex-col md:flex-row justify-center md:justify-between px-16 items-center mb-3 border-b-4 border-slate-400 py-3">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="social-icon flex justify-end items-center">
            <FaFacebook
              style={{ backgroundColor: '#4267B2' }}
              className="m-2 text-5xl text-white cursor-pointer p-2 rounded-full"
            />
            <FaTwitterSquare
              style={{ backgroundColor: '#1DA1F2' }}
              className="m-2 text-5xl text-white cursor-pointer p-2 rounded-full"
            />
            <FaInstagram
              style={{ backgroundColor: '#E1306C' }}
              className="m-2 text-5xl text-white cursor-pointer p-2 rounded-full"
            />
            <FaLinkedin
              style={{ backgroundColor: '#0077B5' }}
              className="m-2 text-5xl text-white cursor-pointer p-2 rounded-full"
            />
            <FaYoutube
              style={{ backgroundColor: '#FC0000' }}
              className="m-2 text-5xl text-white cursor-pointer p-2 rounded-full"
            />
          </div>
        </div>
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center text-center">
          {/* Company  */}
          <div className="company my-2 flex flex-col">
            <h2>Company</h2>
            <Link to='/'>Home</Link>
            <Link to='/login'>Contact Us</Link>
            <Link to='/'>About Us</Link>
            <Link to='/'>Get Started</Link>
          </div>

          {/* service  */}
          <div className="services my-2 flex flex-col">
            <h2>Service</h2>
            <Link to='/'>Deliver Organic Food</Link>
            <Link to='/'>On Time Delivery</Link>
            <Link to='/'>Home Delivery</Link>
            <Link to='/'>Customer Satisfaction</Link>
          </div>

          {/* Account  */}
          <div className="account my-2 flex flex-col">
            <h2>Account</h2>
            <Link to='/'>Profile</Link>
            <Link to='/'>My Account</Link>
            <Link to='/'>Preferrence</Link>
            <Link to='/'>Purchase</Link>
          </div>

          {/* subscribe  */}
          <div className="subscript text-center md:text-left my-2">
            <Link to='/'>Newsletter</Link>
            <form onSubmit={handleJoin}>
              <input
                className="border-2 border-slate-400 rounded-full my-2 px-2"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
              <br />
              <div className="button">
                <input className='py-2 pl-3 text-white bg-slate-700 w-2/3 rounded-md cursor-pointer mx-auto md:mx-0' type="submit" value="Join Us" />
              </div>
            </form>
          </div>
        </div>
        <div className="copyright flex flex-col md:flex-row my-3 items-center justify-between px-16 border-t-2 border-slate-300 py-5">
          <div className="copyright-text">
            <p>
              Copyright &copy;2022{' '}
              <Link to='/' className="text-sky-500 italic">
                Kraft Foods
              </Link>{' '}
              All right reserve
            </p>
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

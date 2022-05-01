import React from 'react';
import logo from '../../images/logo.png'
import { FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className=''>
      <div className="footer-header flex flex-col md:flex-row justify-center md:justify-between px-16 items-center mb-3 border-b-4 border-slate-400 py-3">
        <div className="logo">
        <img src= {logo} alt="" />
        </div>
        <div className="social-icon flex justify-end items-center">
          <FaFacebook className='m-2 text-5xl bg-slate-400 hover:bg-slate-700 cursor-pointer p-3 rounded-full' />
          <FaTwitterSquare className='m-2 text-5xl bg-slate-400 hover:bg-slate-700 cursor-pointer p-3 rounded-full' />
          <FaInstagram className='m-2 text-5xl bg-slate-400 hover:bg-slate-700 cursor-pointer p-3 rounded-full' />
          <FaLinkedin className='m-2 text-5xl bg-slate-400 hover:bg-slate-700 cursor-pointer p-3 rounded-full' />
          <FaYoutube className='m-2 text-5xl bg-slate-400 hover:bg-slate-700 cursor-pointer p-3 rounded-full' />
        </div>
      </div>
      
    </footer>
    </>
  );
};

export default Footer;
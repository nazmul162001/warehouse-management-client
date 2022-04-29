import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {


  
  const handleSignIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
  }
  
  
  return (
    <div className="container flex flex-col justify-center items-center h-96">
      <form onSubmit={handleSignIn} className='input-form leading-6'>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" id="email" placeholder='Enter Your Email'/>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" id="password" placeholder='Enter Your Password'/>
        <br />
        <button className='py-1 px-5 bg-orange-600 my-2 mr-3 rounded-full'>Login</button>
        <Link className='border-b-2 border-slate-900' to='/register'>Register here</Link>
        <br />
        <div className="google-sign-ing text-center">
        <button className='mt-3 py-2 px-5 bg-blue-700 text-white rounded-full'>Login with Google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

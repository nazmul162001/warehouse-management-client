import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorMessage;
  if (error) {
    errorMessage = (
      <p className="italic text-red-600 font-xl"> {error.message} </p>
    );
  }
  if (user) {
    navigate('/');
  }

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
  };

  return (
    <div className="container flex flex-col justify-center items-center h-96">
      <form onSubmit={handleSubmit} className="input-form leading-6">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
        />
        <br />
        {errorMessage}
        <br />
        <div className="login-btn flex items-center justify-between">
          <button className="py-1 px-5 bg-orange-600 my-2 mr-3 rounded-full">
            Login
          </button>
          <Link className="border-b-2 border-slate-900" to="/register">
            Register here
          </Link>
        </div>
        <br />
        <div className="google-sign-ing text-center">
          <button
            onClick={() => signInWithGoogle()}
            className="mt-3 py-2 px-5 bg-blue-700 text-white rounded-full"
          >
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

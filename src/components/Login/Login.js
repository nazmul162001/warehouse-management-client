import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);


    // show error message
  let errorMessage;
  if (googleError) {
    errorMessage = (
      <p className="italic text-red-600 font-xl"> {googleError.message} </p>
    );
  }

  if (googleUser || user) {
    navigate('/');
  }

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
  };
  // get email from input //
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // reset password //
  const handleResetPassword = () => {
    if (!email) {
      toast.error('please input email')
    } else {
      sendPasswordResetEmail(email)
      toast.success('reset email sent')
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-96">
      <form onSubmit={handleSubmit} className="input-form leading-6 w-full md:w-2/5">
        <label htmlFor="email">Email</label>
        <br />
        <input
          onChange={handleEmail}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          required
        />
        <br />
        {errorMessage}
        <br />
        <div className="login-btn flex items-center justify-between">
          <button className="py-1 px-5 bg-orange-600 my-2 mr-3 rounded-full">
            Login
          </button>

          <p>
            New here?{' '}
            <Link className="underline text-sky-600 italic" to="/register">
              Register here
            </Link>
          </p>
        </div>
        <p className="italic">
          Forget password?{' '}
          <span
            onClick={handleResetPassword}
            className="underline text-sky-600 cursor-pointer"
          >
            reset password
          </span>{' '}
        </p>
        <br />
        <div className="google-sign-ing text-center">
          <div
            onClick={() => signInWithGoogle()}
            className="mt-3 py-2 px-5 bg-blue-700 text-white rounded-full cursor-pointer"
          >
            Login with Google
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

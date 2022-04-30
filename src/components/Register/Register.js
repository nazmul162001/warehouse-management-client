import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  let errorMessage;
  if (error || googleError) {
    errorMessage = (
      <p className="italic text-red-600 font-xl">
        {error.message}
      </p>
    );
  }

  if(user){
    navigate('/')
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
        setErr('Password do not match');
        return;
    }
    createUserWithEmailAndPassword(email, password);
    setErr('');
  };

  return (
    <div className="container flex flex-col justify-center items-center h-96">
      <form onSubmit={handleRegister} className="input-form leading-6">
        <label htmlFor="email">Email</label>
        <br />
        <input
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
          placeholder="Enter Password"
          required
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Enter Password Again"
          required
        />
        <br />
        {errorMessage}
        <p className="italic text-red-500">{err}</p>
        <br />
        <div className="login-btn flex items-center justify-between">
          <button className="py-1 px-5 bg-orange-600 my-2 mr-3 rounded-full">
            Register
          </button>
          <p>
            Already a member?{' '}
            <Link className="underline text-sky-600 italic" to="/login">
              Login here
            </Link>
          </p>
        </div>
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

export default Register;

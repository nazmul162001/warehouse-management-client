import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import {FcGoogle} from 'react-icons/fc'
import Spinner from '../Spinner/Spinner';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  let errorMessage;
  if (error) {
    errorMessage = (
      <p className="italic text-red-600 font-xl">
        {' '}
        User already exists, Please Log in{' '}
      </p>
    );
  }

  if(loading){
    return <Spinner></Spinner>
  }

  if(googleError){
    errorMessage = <p className='italic text-red-600 font-xl'>{googleError.message}</p>
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
        toast.error('password do not match')
        return;
    }
    createUserWithEmailAndPassword(email, password);
    setErr('');
  };

  return (
    <div className="container flex flex-col justify-center items-center h-full">
      <form onSubmit={handleRegister} className="input-form mt-[70px] leading-6 w-full md:w-2/5">
      <div className="vector-profile flex items-center justify-center relative pb-10 ">
          <img className='vector-profile-image' src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Pic.png" alt="" />
        </div>
        <h1 className='text-center pb-5 text-2xl text-gray-600 font-mono'>Register To Your Account</h1>
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
        <div className="login-btn flex items-center justify-center flex-col">
        <button style={{background: '#2FB166'}} className="py-2 px-5  w-full mb-2 mr-3 rounded-md text-white text-xl">
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
        
        {/* Devider  */}
        <div className="devider flex items-center justify-center">
        <div className="left-line w-full h-[2px] bg-gray-500"></div>
        <p className='px-3'>or</p>
        <div className="right-line w-full h-[2px] bg-gray-500"></div>
        </div>
        
        <div className="google-sign-ing text-center">
          <div
            onClick={() => signInWithGoogle()}
            className="mt-3 py-2 px-5 bg-blue-700 text-white rounded-full cursor-pointer flex items-center justify-center"
          >
            <FcGoogle className='text-3xl mr-3' /> Login with Google
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

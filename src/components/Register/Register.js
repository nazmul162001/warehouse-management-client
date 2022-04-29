import React from 'react';
import { Link } from 'react-router-dom';

const handleRegister = e => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  console.log(email, password);
}

const Register = () => {
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
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Enter Password Again"
        />
        <br />
        <button className="py-1 px-5 bg-orange-600 my-2 mr-3 rounded-full">
          Register
        </button>
        <Link to="/login">Login here</Link>
        <br />
        <div className="google-sign-ing text-center">
          <button className="mt-3 py-2 px-5 bg-blue-700 text-white rounded-full">
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

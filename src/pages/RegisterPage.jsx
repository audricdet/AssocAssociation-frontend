import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/';
  const inputRefEmail = useRef();
  const inputRefPassword = useRef();
  const inputRefConfPassword = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: inputRefEmail.current.value,
      password: inputRefPassword.current.value,
      confirm_password: inputRefConfPassword.current.value,
    };
    console.log(data);
    fetch('https://assocassociation.herokuapp.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('user_id', data.id);
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <h3 className="mb-4 font-medium text-gray-800">Sign Up</h3>

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ref={inputRefEmail}
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ref={inputRefPassword}
          type="password"
          placeholder="Password"
          required
        />

        <label htmlFor="confirm-password" className="sr-only">
          Confirm Password
        </label>
        <input
          className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ref={inputRefConfPassword}
          type="password"
          placeholder="Confirm password"
          required
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-lg font-bold text-white bg-assoc rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Sign Up!
        </button>

        <p className="mt-4 text-gray-700">
          Already have an account?{' '}
          <NavLink to="/login" className="text-blue-500 hover:text-blue-600">
            Log in
          </NavLink>
        </p>
      </form>
    </div>
    );
}

export default RegisterPage;

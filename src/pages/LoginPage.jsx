import { useForm } from 'react-hook-form';
import { useAuth } from '../components/Auth';
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const auth = useAuth();
  const redirectPath = location.state?.path || '/';
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const onSubmit = async (data = {}) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email, password: data.password }),
      credentials: 'include',
    };
    try {
      const response = await fetch('https://assocassociation.herokuapp.com/login', requestOptions);
      const responseData = await response.json();
      console.log(responseData);
      if (responseData && responseData.error) {
        setError('User not found.'); // display error message
        navigate('/register'); // redirect to the register page
      } else {
        const userId = responseData.id;
        localStorage.setItem('user_id', userId);
        auth.login(responseData.id); // login the user
        navigate('/associations'); // redirect to the associations page after successful login
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img src="../../public/images/logo.png" alt="Logo" className="w-32 h-32 mb-8" />
        <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              {...register('email')}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              {...register('password')}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-assoc hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <NavLink
              to="/register"
              className="bg-assoc hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </NavLink>
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>} {/* display error message if exists */}
      </div>
    </div>
  );
}

export default LoginPage;



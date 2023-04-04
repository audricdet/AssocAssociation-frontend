import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CompleteProfilePage() {
  const location = useLocation();
  const userId = location.state?.userId;

  const inputRefFirstName = useRef();
  const inputRefLastName = useRef();
  const inputRefPhone = useRef();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: inputRefFirstName.current.value,
      last_name: inputRefLastName.current.value,
      phone: inputRefPhone.current.value,
      user_id: userId
    };
    console.log(data);
    fetch('https://assocassociation.herokuapp.com/insertProfileInfos', {
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
        console.log(data);
        // Redirect to profile page or other page as needed
        navigate('/profile');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <h3 className="mb-4 font-medium text-gray-800">Complete Your Profile</h3>

        <label htmlFor="first_name" className="sr-only">
          First Name
        </label>
        <input
          className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ref={inputRefFirstName}
          name="first_name"
          type="text"
          placeholder="Enter your first name"
          required
        />

        <label htmlFor="last_name" className="sr-only">
          Last Name
        </label>
        <input
          className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ref={inputRefLastName}
          type="text"
          placeholder="Enter your last name"
          required
        />

        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input
          className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ref={inputRefPhone}
          type="tel"
          placeholder="Enter your phone number"
          required
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-lg font-bold text-white bg-assoc rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default CompleteProfilePage;
